import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { sampleGroups } from "../constants/sampleData";
import GroupDetails from "../components/specific/GroupDetails";

const Groups = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState(sampleGroups);
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER */}
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Manage Groups</Typography>
        </Toolbar>
      </AppBar>

      {/* BODY */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        
        {/* LEFT - GROUP LIST */}
        <Box
          sx={{
            width: "30%",
            borderRight: "1px solid #ddd",
            overflowY: "auto",
          }}
        >
          <List>
            {groups.map((group) => (
              <ListItemButton
                key={group._id}
                selected={selectedGroup?._id === group._id}
                onClick={() => setSelectedGroup(group)}
              >
                <ListItemAvatar>
                    <Avatar src="group.avatar" />
                </ListItemAvatar>
                <ListItemText primary={group.name} />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* RIGHT - GROUP DETAILS */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          {selectedGroup && (
            <GroupDetails
              group={selectedGroup}
              groups={groups}
              setGroups={setGroups}
              setSelectedGroup={setSelectedGroup}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Groups;
