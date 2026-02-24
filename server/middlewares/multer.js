import multer from "multer";

export const singleAvatar = multer({
    limits: { fileSize: 1024 * 1024 * 5 },
}).single("avatar");