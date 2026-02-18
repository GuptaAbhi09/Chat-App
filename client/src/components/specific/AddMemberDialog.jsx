import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Checkbox,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";

const AddMemberDialog = ({
  open,
  handleClose,
  group,
  groups,
  setGroups,
}) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const availableUsers = sampleUsers.filter(
    (user) => !group.members.some((m) => m._id === user._id)
  );

  const handleToggle = (user) => {
    setSelectedUsers((prev) =>
      prev.some((u) => u._id === user._id)
        ? prev.filter((u) => u._id !== user._id)
        : [...prev, user]
    );
  };

  const handleAdd = () => {
    const updatedGroups = groups.map((g) =>
      g._id === group._id
        ? {
            ...g,
            members: [...g.members, ...selectedUsers],
          }
        : g
    );

    setGroups(updatedGroups);
    setSelectedUsers([]);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Select Members</DialogTitle>

      <DialogContent>
        <List>
          {availableUsers.map((user) => (
            <ListItemButton
              key={user._id}
              onClick={() => handleToggle(user)}
            >
              <Checkbox
                checked={selectedUsers.some(
                  (u) => u._id === user._id
                )}
              />
              <ListItemAvatar>
                <Avatar src="user.avatar" />
              </ListItemAvatar>
              <ListItemText primary={user.name} />
            </ListItemButton>
          ))}
        </List>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleAdd}
          disabled={selectedUsers.length === 0}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMemberDialog;
