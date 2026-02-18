import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useParams } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Title from "../components/shared/Title";
import MessageComponent from "../components/shared/MessageComponent";
import { sampleMessages } from "../constants/sampleData";

const Chat = () => {
  const { chatId } = useParams();

  const [messages, setMessages] = useState(sampleMessages);
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState([]);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const user = { _id: "me" };

  // ✅ AUTO SCROLL
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ SEND MESSAGE
  const handleSend = () => {
    if (!message.trim() && attachments.length === 0) return;

    const newMessage = {
      _id: Date.now().toString(),
      content: message,
      attachments,
      sender: user,
      createdAt: new Date().toISOString(),
      status: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
    setAttachments([]);

    // simulate delivered & seen
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg._id === newMessage._id
            ? { ...msg, status: "delivered" }
            : msg
        )
      );
    }, 1000);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg._id === newMessage._id
            ? { ...msg, status: "seen" }
            : msg
        )
      );
    }, 2000);
  };

  // ✅ ENTER TO SEND
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ✅ FILE UPLOAD
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const formattedFiles = files.map((file) => ({
      public_id: file.name,
      url: URL.createObjectURL(file),
    }));

    setAttachments(formattedFiles);
  };

  return (
    <>
      <Title title={`Chat ${chatId}`} description="Chat conversation" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* MESSAGE AREA */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            p: 2,
          }}
        >
          {messages.map((msg) => (
            <MessageComponent
              key={msg._id}
              message={msg}
              user={user}
            />
          ))}

          <div ref={messagesEndRef} />
        </Box>

        {/* INPUT AREA */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1,
            borderTop: "1px solid #ddd",
            bgcolor: "white",
          }}
        >
          <IconButton onClick={() => fileInputRef.current.click()}>
            <AttachFileIcon />
          </IconButton>

          <input
            type="file"
            hidden
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          <TextField
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <IconButton color="primary" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default AppLayout(Chat);
