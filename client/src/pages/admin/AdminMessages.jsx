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
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import AdminLayout from "../../components/layout/AdminLayout";
import {
  sampleMessages,
  sampleUsers,
  sampleChats,
} from "../../constants/sampleData";

const AdminMessages = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [search, setSearch] = useState("");
  const [deleteMessage, setDeleteMessage] = useState(null);

  const getUser = (id) =>
    sampleUsers.find((u) => u._id === id);

  const getChat = (id) =>
    sampleChats.find((c) => c._id === id);

  const filteredMessages = useMemo(() => {
    return messages.filter((msg) =>
      msg.content?.toLowerCase().includes(search.toLowerCase())
    );
  }, [messages, search]);

  const handleDelete = () => {
    setMessages((prev) =>
      prev.filter((msg) => msg._id !== deleteMessage._id)
    );
    setDeleteMessage(null);
  };

  return (
    <AdminLayout>
      <Box>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Manage Messages
        </Typography>

        <TextField
          label="Search Message"
          fullWidth
          sx={{ mb: 3 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Paper sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sender</TableCell>
                <TableCell>Chat</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Attachment</TableCell>
                <TableCell>Time</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredMessages.map((msg) => {
                const user = getUser(msg.sender);
                const chat = getChat(msg.chat);

                return (
                  <TableRow key={msg._id}>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Avatar src={user?.avatar} />
                        {user?.name}
                      </Box>
                    </TableCell>

                    <TableCell>
                      {chat?.name || "Private Chat"}
                    </TableCell>

                    <TableCell>
                      {msg.content}
                    </TableCell>

                    <TableCell>
                        {msg.attachments && msg.attachments.length > 0 ? (
                            msg.attachments.map((file, index) => (
                            <Button
                                key={index}
                                size="small"
                                variant="outlined"
                                href={file.url}
                                target="_blank"
                                download
                                sx={{ mr: 1 }}
                            >
                                {file.name}
                            </Button>
                            ))
                        ) : (
                            "—"
                        )}
                    </TableCell>

                    <TableCell>
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </TableCell>

                    <TableCell align="center">
                      <IconButton
                        color="error"
                        onClick={() => setDeleteMessage(msg)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}

              {filteredMessages.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No Messages Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>

        {/* Delete Dialog */}
        <Dialog
          open={Boolean(deleteMessage)}
          onClose={() => setDeleteMessage(null)}
        >
          <DialogTitle>Delete Message</DialogTitle>
          <DialogContent>
            Delete this message?
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setDeleteMessage(null)}>Cancel</Button>
            <Button color="error" onClick={handleDelete}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </AdminLayout>
  );
};

export default AdminMessages;
