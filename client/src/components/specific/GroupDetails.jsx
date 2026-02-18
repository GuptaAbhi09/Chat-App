import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  IconButton,
  Divider,
  ListItemButton,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import AddMemberDialog from "./AddMemberDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const GroupDetails = ({ group, groups, setGroups }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [groupName, setGroupName] = useState(group.name);
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  // Rename Group
  const handleRename = () => {
    const updated = groups.map((g) =>
      g._id === group._id ? { ...g, name: groupName } : g
    );
    setGroups(updated);
  };

  // Remove Member
  const handleRemoveMember = (memberId) => {
    const updated = groups.map((g) =>
      g._id === group._id
        ? {
            ...g,
            members: g.members.filter((m) => m._id !== memberId),
          }
        : g
    );
    setGroups(updated);
  };

  return (
    <Box>

      {/* Rename */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        {isEditing ? (
          <>
            <TextField
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
            <IconButton
              onClick={() => {
                const updated = groups.map((g) =>
                  g._id === group._id
                    ? { ...g, name: groupName }
                    : g
                );
                setGroups(updated);
                setIsEditing(false);
              }}
            >
              <SaveIcon />
              
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h5">{group.name}</Typography>
            <IconButton onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </Box>

      {/* Members */}
      <Typography variant="h6">Members</Typography>
      <List>
        {group.members.map((member) => (
          <ListItemButton 
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            border: "1px solid #ccc",
            padding: "6px 10px",
            borderRadius: "20px",
            marginBottom: "8px",
            height: "100%",
            overflowY: "auto",
          }}
          key={member._id}
          >
            <ListItemAvatar>
              <Avatar src={member.avatar} />
            </ListItemAvatar>
            <ListItem
            key={member._id}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={() => handleRemoveMember(member._id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            {member.name}
          </ListItem>
          </ListItemButton>
        ))}
      </List>

      {/* Buttons */}
      <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
        <Button variant="outlined" onClick={() => setOpenAdd(true)}>
          Add Member
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => setOpenDelete(true)}
        >
          Delete Group
        </Button>
      </Box>

      <AddMemberDialog
        open={openAdd}
        handleClose={() => setOpenAdd(false)}
        group={group}
        groups={groups}
        setGroups={setGroups}
      />

      <ConfirmDeleteDialog
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        group={group}
        groups={groups}
        setGroups={setGroups}
      />
    </Box>
  );
};

export default GroupDetails;
