import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { newGroupChat, getMyChats, renameGroupName, getMyGroups } from "../controllers/chatController.js";

const router = express.Router();

// ab jo bhi routes neeche hai wo protected honge to isAuthenticated middleware use karna padega
router.use(isAuthenticated); 

router.post("/new-group", newGroupChat);
router.get("/my-chats", getMyChats);
router.get("/my-groups", getMyGroups);
router.put("/rename-group", renameGroupName);

export default router; 