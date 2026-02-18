import { Box, Typography, Link } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { memo } from "react";

const MessageComponent = ({ message, user }) => {
  const isMe = message.sender._id === user._id;

  const renderStatus = () => {
    if (!isMe) return null;

    if (message.status === "sent")
      return <DoneIcon sx={{ fontSize: 16 }} />;
    if (message.status === "delivered")
      return <DoneAllIcon sx={{ fontSize: 16 }} />;
    if (message.status === "seen")
      return <DoneAllIcon sx={{ fontSize: 16, color: "#4fc3f7" }} />;
  };

  // ✅ Time Format HH:MM only
  const formattedTime = new Date(message.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isMe ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
      <Box
        sx={{
          bgcolor: isMe ? "#1976d2" : "#e4e6eb",
          color: isMe ? "white" : "black",
          px: 2,
          py: 1,
          borderRadius: 2,
          maxWidth: "60%",
        }}
      >

        {/* ✅ ATTACHMENTS WITH DOWNLOAD */}
        {message.attachments?.map((file) => (
          <Box key={file.public_id} sx={{ mt: 1 }}>
            <Link
              href={file.url}
              download={file.public_id}
              underline="none"
              color="inherit"
            >
              <img
                src={file.url}
                alt="attachment"
                style={{
                  width: "100%",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              />
            </Link>
          </Box>
        ))}

        {/* MESSAGE TEXT */}
        {message.content && (
          <Typography variant="body2">{message.content}</Typography>
        )}

        {/* TIME + STATUS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 0.5,
            mt: 0.5,
          }}
        >
          <Typography variant="caption">
            {formattedTime}
          </Typography>
          {renderStatus()}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(MessageComponent);
