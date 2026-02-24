import express from 'express';
import {register, login, logout} from "../controllers/userController.js";
import {singleAvatar} from "../middlewares/multer.js";
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/register", singleAvatar, register);
router.post("/login", login);

// ab jo bhi routes neeche hai wo protected honge to isAuthenticated middleware use karna padega
router.use(isAuthenticated); 
router.post("/logout", logout);

export default router;