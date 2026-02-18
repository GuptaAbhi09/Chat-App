import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Badge,
  Tooltip,
  Drawer,
  Avatar,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import ChatList from "../specific/ChatList";
import Search from "../specific/Search";
import Notifications from "../specific/Notifications";
import NewGroup from "../specific/NewGroup";

import Profile from "../specific/Profile";
import { sampleChats, sampleNotifications, sampleOnlineUsers } from "../../constants/sampleData";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotify, setOpenNotify] = useState(false);
  const [openGroup, setOpenGroup] = useState(false);
  const [openProfile, setOpenProfile] = useState(false); 
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* LEFT */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
              Chat App
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="Search">
              <IconButton color="inherit" onClick={() => setOpenSearch(true)}>
                <SearchIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="New Group">
              <IconButton color="inherit" onClick={() => setOpenGroup(true)}>
                <AddIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Manage Groups">
              <IconButton
                color="inherit"
                onClick={() => navigate("/groups")}
              >
                <GroupIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Notifications">
              <IconButton color="inherit" sx={{marginRight: 3}} onClick={() => setOpenNotify(true)}>
                <Badge badgeContent={sampleNotifications.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* 👇 Profile only meaningful for mobile */}
            {isMobile && (
              <Tooltip title="Profile">
                <IconButton
                  color="inherit"
                  onClick={() => setOpenProfile(true)}
                >
                  <Avatar sx={{ width: 32, height: 32 }} />
                </IconButton>
              </Tooltip>
            )}

          </Box>
        </Toolbar>
      </AppBar>

      {/* LEFT Drawer → Chat List (Mobile) */}
      <Drawer
        anchor="left"
        open={mobileOpen} // Agar mobileOpen true hai toh drawer khulega left side se
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 280 }}>
          <ChatList chats={sampleChats} onlineUsers={sampleOnlineUsers} />
        </Box>
      </Drawer>

      {/* RIGHT Drawer → Profile (Mobile Only) */}
      <Drawer
        anchor="right"
        open={openProfile} // Agar openProfile true hai toh drawer khulega right side se
        onClose={() => setOpenProfile(false)}
      >
        <Box sx={{ width: 300 }}>
          <Profile />
        </Box>
      </Drawer>

      {/* Dialog Components */}
      <Search open={openSearch} handleClose={() => setOpenSearch(false)} />
      <Notifications open={openNotify} handleClose={() => setOpenNotify(false)} />
      <NewGroup open={openGroup} handleClose={() => setOpenGroup(false)} />
    </>
  );
};

export default Header;
