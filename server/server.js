import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer"; // Import multer
import chat from "./chat.js";

dotenv.config();   //reads the info from .env

const app = express();
app.use(cors());

// Configure multer
const storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, "uploads/");      //cb()是哪里的function？
},
filename: function (req, file, cb) {
cb(null, file.originalname);
},
});
const upload = multer({ storage: storage });

const PORT = 5001;

let filePath;

app.post("/upload", upload.single("file"), async (req, res) => {       //把upload的file从前端转到后端
// Use multer to handle file upload
filePath = req.file.path; // The path where the file is temporarily saved
res.send(filePath + " upload successfully.");
});

app.get("/chat", async (req, res) => {
const resp = await chat(filePath, req.query.question); // Pass the file path to your main function
res.send(resp.text);
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
