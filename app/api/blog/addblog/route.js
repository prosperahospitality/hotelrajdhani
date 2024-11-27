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
const myUploadMiddleware = upload.array("file");

function runMiddleware(req, fn) {
    return new Promise((resolve, reject) => {
        fn(req, {}, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export async function POST(request) {
    try {
        await db.connect();

        // Parse the form data
        const formData = await request.formData();
        const title = formData.get("title");
        const writer = formData.get("writer");
        const date = new Date(formData.get("date"));
        const readTime = formData.get("readTime");
        const introduction = formData.get("introduction");
        const sections = JSON.parse(formData.get("sections")) || [];
        const files = formData.getAll("file");

        if (!title || !writer || !date || !readTime || !introduction) {
            return NextResponse.json({ error: "All fields are required." }, { status: 401 });
        }

        if (files.length === 0) {
            return NextResponse.json({ error: "No files found." }, { status: 402 });
        }

        const uploadedImages = [];

        for (const file of files) {
            if (file instanceof File) {
                const b64 = Buffer.from(await file.arrayBuffer()).toString("base64");
                const dataURI = `data:${file.type};base64,${b64}`;

                const result = await cloudinary.uploader.upload(dataURI, {
                    folder: "/vinifera/blog",
                });

                const newImage = new hotelrajdhaniblog({
                    title,
                    writer,
                    date,
                    readTime,
                    introduction,
                    sections,
                    image: {
                        public_id: result.public_id,
                        url: result.secure_url,
                    },
                });
                await newImage.save();
                uploadedImages.push(result.secure_url);
            }
        }
        return NextResponse.json({ status: 200, message: "blog Upload successful", images: uploadedImages });
    } catch (error) {
        console.error("Error handling request:", error);
        return NextResponse.json({ error: "Failed to handle request." }, { status: 500 });
    }
}