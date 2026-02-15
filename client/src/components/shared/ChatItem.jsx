import React, { memo } from "react";
import {
  Box,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageCount,
  handleDeleteChatOption,
}) => {
  const location = useLocation();
  const isActive = location.pathname === `/chat/${_id}`;

  return (
    <Link
      to={`/chat/${_id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box
        onContextMenu={(e) => {
          e.preventDefault();
          handleDeleteChatOption(e, _id, groupChat);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 1.5,
          cursor: "pointer",
          backgroundColor: isActive ? "#e3f2fd" : "transparent",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <Badge
          overlap="circular"
          variant="dot"
          color="success"
          invisible={!isOnline}
        >
          {groupChat ? (
            <AvatarCard avatars={avatar} />
          ) : (
            <Avatar src={avatar[0]} />
          )}
        </Badge>

        <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
          <Typography fontWeight="600" noWrap>
            {name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
          >
            {sameSender ? "You: " : ""}
            Last message preview...
          </Typography>
        </Box>

        {newMessageCount > 0 && (
          <Box
            sx={{
              minWidth: 22,
              height: 22,
              borderRadius: "50%",
              backgroundColor: "#1976d2",
              color: "white",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 0.5,
            }}
          >
            {newMessageCount}
          </Box>
        )}
      </Box>
    </Link>
  );
};

export default memo(ChatItem);
