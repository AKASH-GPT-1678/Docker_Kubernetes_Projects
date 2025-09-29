import { Router } from "express";
import express from 'express'
import { Emservice } from "../functions/user.emergency.js";
import { Sendmsg } from "../functions/Twilio.mjs";
import Handler from "../functions/user.emergency.js";
import { frontend } from "../cloud/google.cloud.js";
import { Googlecloud } from "../cloud/google.cloud.js";
// ...existing code...";
import path from "path";
import { Register } from '../functions/Register.js';
import { Login } from "../functions/Register.js";
import { Upload } from "../cloud/google.cloud.js";
import { Storage } from "@google-cloud/storage";
import { strict } from "assert";
import { publicDecrypt } from "crypto";
const router = express.Router();

router.post("/sos", Emservice)


router.post('/service', Sendmsg)
router.post("/register", Register)
router.post('/json', Handler)
router.post("/upload", Upload.single("file"), async (req, res) => {
    try {
        console.log("Request Arrived ✅");
        console.log("File Data:", req.file); // Debugging

        if (!req.file) {
            return res.status(400).json({ message: "No files are being uploaded" });
        }

        const Gstorage = new Storage({
            keyFilename: 'D:\\Smart City\\Smart-city-Management\\backend\\cloud\\maps-ai-453308-40ec8192ba7f.json',
            projectId: 'maps-ai-453308'
        
        });

        const bucket = 'smart_city_123';
        const buckett = Gstorage.bucket(bucket);
        const final = buckett.file(req.file.originalname); // ✅ Fix: Pass filename, not object
        console.log("Uploading file:", req.file.originalname);

        const blobstream = final.createWriteStream();

        blobstream.on('error', (err) => {
            console.error("Upload error:", err);
            return res.status(400).json({ message: "Something went wrong, file couldn't be uploaded", err: err.message });
        });

        blobstream.on('finish', async () => {
            console.log("Upload successful ✅");
            try {
                
                await final.makePublic();
                const publicurl = `https://storage.googleapis.com/${bucket}/${req.file.originalname}`;
                return res.status(200).json({ message: "Upload completed successfully"  ,publicurl });

            } catch (error) {
                // console.log(error)
                
            }
           
        });

        blobstream.end(req.file.buffer);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: "Error uploading file", error: error.message });
    }
});

router.post("/login", Login)

export default router