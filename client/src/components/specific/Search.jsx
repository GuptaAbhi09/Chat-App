import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
} from "@mui/material";
import { memo, useState } from "react";
import UserList from "../shared/UserList";
import { sampleUsers } from "../../constants/sampleData";

const Search = ({ open, handleClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = sampleUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Search Users</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          placeholder="Search by name..."
          variant="outlined"
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
          <UserList users={filteredUsers} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default memo(Search);
