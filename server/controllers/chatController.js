import Chat from "../models/Chat.js"
import {asyncHandler} from "../middlewares/asyncHandler.js"


export const newGroupChat = asyncHandler(async (req, res) => {
    // #swagger.tags = ['Chat']
    const {name, members} = req.body;
    if(!name || !members) throw new Error("Please Provide Name and Members");
    if(members.length < 2) throw new Error("Group members must be at least 2");
    
    const allMembers = [...members, req.user._id];
    await Chat.create({
        name, 
        groupChat:true,
        creator: req.user._id,
        members: allMembers,
    });

    res.status(201).json({
        success: true,
        message: "Group Chat Created Successfully",
    });
});

export const getMyChats = asyncHandler(async(req,res) => {
    // #swagger.tags = ['Chat']
    // 1. Find all chats where the logged-in user is a member
    const chats = await Chat.find({ members: req.user._id })
        .populate("members", "name avatar");
    // 2. Return the data to the frontend
    res.status(200).json({
        success: true,
        chats,
    });
});

export const getMyGroups = asyncHandler(async(req,res) => {
    // #swagger.tags = ['Chat']
    const chats = await Chat.find({ members: req.user._id, groupChat:true })
        .populate("members", "name avatar");
    // 2. Return the data to the frontend
    res.status(200).json({
        success: true,
        chats,
    });
});

export const renameGroupName = asyncHandler(async(req, res) => {
    // #swagger.tags = ['Chat']
    const {chatId, name} = req.body;

    const chat = await Chat.findById(chatId);
    if(!chat) throw new Error("Chat not found");
    if(!chat.groupChat) throw new Error("Only Group Chats can be renamed");

    if(chat.creator.toString() !== req.user._id.toString()) throw new Error("You can only update the name of group you created");
    
    chat.name = name;
    await chat.save();

    res.status(200).json({
        success: true,
        message: "Group Chat Renamed Successfully",
    });    
});