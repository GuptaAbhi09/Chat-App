import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  IconButton,
  Chip,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import AdminLayout from "../../components/layout/AdminLayout";
import { sampleChats } from "../../constants/sampleData";

const AdminChats = () => {
  const [chats, setChats] = useState(sampleChats);
  const [search, setSearch] = useState("");
  const [deleteChat, setDeleteChat] = useState(null);

  // 🔎 Search Filter
  const filteredChats = useMemo(() => {
    return chats.filter((chat) =>
      chat.name?.toLowerCase().includes(search.toLowerCase())
    );
  }, [chats, search]);

  const handleDelete = () => {
    setChats((prev) =>
      prev.filter((chat) => chat._id !== deleteChat._id)
    );
    setDeleteChat(null);
  };

  return (
    <AdminLayout>
      <Box>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Manage Chats
        </Typography>

        <TextField
          label="Search Chat"
          fullWidth
          sx={{ mb: 3 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Paper sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Chat</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Members</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredChats.map((chat) => (
                <TableRow key={chat._id}>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar src={chat.avatar} />
                      {chat.name || "Private Chat"}
                    </Box>
                  </TableCell>

                  <TableCell>
                    {chat.isGroupChat ? (
                      <Chip label="Group" color="primary" size="small" />
                    ) : (
                      <Chip label="Private" size="small" />
                    )}
                  </TableCell>

                  <TableCell>
                    {chat.members?.length || 2}
                  </TableCell>

                  <TableCell align="center">
                    <IconButton
                      color="error"
                      onClick={() => setDeleteChat(chat)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {filteredChats.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No Chats Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>

        {/* Delete Dialog */}
        <Dialog
          open={Boolean(deleteChat)}
          onClose={() => setDeleteChat(null)}
        >
          <DialogTitle>Delete Chat</DialogTitle>
          <DialogContent>
            Are you sure you want to delete{" "}
            <strong>{deleteChat?.name}</strong>?
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setDeleteChat(null)}>Cancel</Button>
            <Button color="error" onClick={handleDelete}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </AdminLayout>
  );
};

export default AdminChats;
