import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import Profile from "../specific/Profile";
import { sampleChats, sampleOnlineUsers } from "../../constants/sampleData";

const AppLayout = (WrappedComponent) => {
  return function LayoutComponent(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
      <>
        <Header />

        <Box
          sx={{
            display: "flex",
            height: "calc(100vh - 64px)",
            width: "100%",
          }}
        >
          {/* LEFT PANEL - CHAT LIST */}
          {!isMobile && (
            <Box
              sx={{
                width: "25%",
                borderRight: "1px solid #e0e0e0",
                overflowY: "auto",
              }}
            >
              <ChatList chats={sampleChats} onlineUsers={sampleOnlineUsers} />
            </Box>
          )}

          {/* CENTER PANEL - CHAT CONTENT */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              bgcolor: "#fafafa",
            }}
          >
            <WrappedComponent {...props} />
          </Box>

          {/* RIGHT PANEL - PROFILE */}
          {!isMobile && (
            <Box
              sx={{
                width: "25%",
                borderLeft: "1px solid #e0e0e0",
                bgcolor: "#f5f5f5",
                overflowY: "auto",
              }}
            >
              <Profile />
            </Box>
          )}
        </Box>
      </>
    );
  };
};

export default AppLayout;
