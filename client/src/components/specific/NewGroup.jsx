import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Typography,
  Avatar,
  Checkbox,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";

const NewGroup = ({ open, handleClose }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserToggle = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const handleCreateGroup = () => {
    if (!groupName.trim()) return alert("Group name required");
    if (selectedUsers.length < 1)
      return alert("Select at least one member");

    const groupData = {
      name: groupName,
      members: selectedUsers,
    };

    console.log("Group Created:", groupData);

    // Reset after creation
    setGroupName("");
    setSelectedUsers([]);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Create New Group</DialogTitle>

      <DialogContent>
        {/* Group Name */}
        <TextField
          fullWidth
          label="Group Name"
          variant="outlined"
          margin="normal"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Add Members
        </Typography>

        {/* User List */}
        <List sx={{ maxHeight: 250, overflowY: "auto" }}>
          {sampleUsers.map((user) => (
            <ListItem
              key={user._id}
              secondaryAction={
                <Checkbox
                  edge="end"
                  checked={selectedUsers.includes(user._id)}
                  onChange={() => handleUserToggle(user._id)}
                />
              }
            >
              <ListItemAvatar>
                <Avatar src={user.avatar} />
              </ListItemAvatar>
              <ListItemText primary={user.name} />
            </ListItem>
          ))}
        </List>

        {/* Selected Count */}
        {selectedUsers.length > 0 && (
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2">
              {selectedUsers.length} member(s) selected
            </Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>

        <Button variant="contained" onClick={handleCreateGroup}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGroup;
