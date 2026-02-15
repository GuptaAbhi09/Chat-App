import { Box, Typography } from "@mui/material";
import ChatItem from "../shared/ChatItem";

const ChatList = ({ chats = [], onlineUsers = [] }) => {
  const handleDeleteChatOption = (e, chatId, groupChat) => {
    console.log("Delete option for:", chatId);
  };

  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "auto",
        borderRight: "1px solid #ddd",
      }}
    >
      <Typography
        variant="h6"
        sx={{ p: 2, borderBottom: "1px solid #ddd" }}
      >
        Chats
      </Typography>

      {chats.map((chat) => (
        <ChatItem
          key={chat._id}
          _id={chat._id}
          name={chat.name}
          avatar={chat.avatar}
          groupChat={chat.groupChat}
          sameSender={chat.sameSender}
          isOnline={onlineUsers.includes(chat._id)}
          newMessageCount={chat.newMessageCount}
          handleDeleteChatOption={handleDeleteChatOption}
        />
      ))}
    </Box>
  );
};

export default ChatList;
