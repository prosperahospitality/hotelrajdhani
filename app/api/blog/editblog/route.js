import db from "@/config/mongodbConfig";
import { hotelrajdhaniblog } from "@/_lib/model/blog/blog";
import { NextResponse } from "next/server";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "dkrsgsa6t",
    api_key: "958294387541916",
    api_secret: "DjNsKr0PEFBWjjieCVYvwPD8nRk",
    secure: true,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });
const myUploadMiddleware = upload.single("file");

// function runMiddleware(req, fn) {
//     return new Promise((resolve, reject) => {
//         fn(req, {}, (result) => {
//             if (result instanceof Error) {
//                 return reject(result);
//             }
//             return resolve(result);
//         });
//     });
// }

export async function POST(request) {
    try {
        await db.connect();

        const formData = await request.formData();
        const file = formData.get("file");
        const _id = formData.get("_id");
        const title = formData.get("title");
        const writer = formData.get("writer");
        const date = new Date(formData.get("date"));
        const readTime = formData.get("readTime");
        const introduction = formData.get("introduction");
        const sections = JSON.parse(formData.get("sections"));

        const existingImage = await hotelrajdhaniblog.findById(_id);
        if (!existingImage) {
            return NextResponse.json({ status: 404, error: "Image not found." });
        }

        if (file) {
            // Delete the old image from Cloudinary
            await cloudinary.uploader.destroy(existingImage.image.public_id);

            // Upload the new image to Cloudinary
            const b64 = Buffer.from(await file.arrayBuffer()).toString("base64");
            const dataURI = `data:${file.type};base64,${b64}`;
            const result = await cloudinary.uploader.upload(dataURI, { folder: "/vinifera/blog" });

            // Update the image field in the database
            existingImage.image = {
                public_id: result.public_id,
                url: result.secure_url,
            };
        }

        // Update other fields
        existingImage.title = title;
        existingImage.writer = writer;
        existingImage.date = date;
        existingImage.readTime = readTime;
        existingImage.introduction = introduction;
        existingImage.sections = sections;

        await existingImage.save();

        return NextResponse.json({ status: 200, message: "blog updated successfully", existingImage });
    } catch (error) {
        console.error("Error handling request:", error);
        return NextResponse.json({ status: 500, error: "Failed to handle request." });
    }
}