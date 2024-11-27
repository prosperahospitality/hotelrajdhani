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

export async function POST(request) {
    try {
        await db.connect();

        const { _id } = await request.json();

        const findblogid = await hotelrajdhaniblog.findById(_id);
        console.log(findblogid, "findblogid");

        if (!findblogid) {
            return NextResponse.json({ status: 401, message: "blog not found" });
        }

        await cloudinary.uploader.destroy(findblogid.image.public_id);
        await hotelrajdhaniblog.findByIdAndDelete(_id);

        return NextResponse.json({ status: 200, message: "blog delete successfully" })
    } catch (error) {
        console.error("Error handling request:", error);
        return NextResponse.json({ status: 500, message: "Failed to handle request." });
    }
}

