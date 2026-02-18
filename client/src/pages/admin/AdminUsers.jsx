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
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import AdminLayout from "../../components/layout/AdminLayout";
import { sampleUsers } from "../../constants/sampleData";

const AdminUsers = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [search, setSearch] = useState("");
  const [deleteUser, setDeleteUser] = useState(null);

  // 🔎 Search Filter
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // ❌ Delete User
  const handleDelete = () => {
    setUsers((prev) => prev.filter((u) => u._id !== deleteUser._id));
    setDeleteUser(null);
  };

  // 🚫 Block / Unblock
  const toggleBlock = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user._id === id
          ? { ...user, blocked: !user.blocked }
          : user
      )
    );
  };

  return (
    <AdminLayout>
      <Box>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Manage Users
        </Typography>

        {/* Search */}
        <TextField
          label="Search User"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Table */}
        <Paper sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar src={user.avatar} />
                      {user.name}
                    </Box>
                  </TableCell>

                  <TableCell>{user.email}</TableCell>

                  <TableCell>
                    {user.blocked ? (
                      <Chip label="Blocked" color="error" size="small" />
                    ) : (
                      <Chip label="Active" color="success" size="small" />
                    )}
                  </TableCell>

                  <TableCell align="center">
                    <IconButton
                      color={user.blocked ? "success" : "warning"}
                      onClick={() => toggleBlock(user._id)}
                    >
                      {user.blocked ? (
                        <CheckCircleIcon />
                      ) : (
                        <BlockIcon />
                      )}
                    </IconButton>

                    <IconButton
                      color="error"
                      onClick={() => setDeleteUser(user)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {filteredUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No Users Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>

        {/* Confirm Delete Dialog */}
        <Dialog
          open={Boolean(deleteUser)}
          onClose={() => setDeleteUser(null)}
        >
          <DialogTitle>Delete User</DialogTitle>
          <DialogContent>
            Are you sure you want to delete{" "}
            <strong>{deleteUser?.name}</strong>?
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setDeleteUser(null)}>Cancel</Button>
            <Button color="error" onClick={handleDelete}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </AdminLayout>
  );
};

export default AdminUsers;
