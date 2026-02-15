import React from "react";
import { Dialog, DialogTitle } from "@mui/material";

const Search = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Search Users</DialogTitle>
    </Dialog>
  );
};

export default Search;
