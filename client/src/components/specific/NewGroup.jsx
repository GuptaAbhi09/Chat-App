import React from "react";
import { Dialog, DialogTitle } from "@mui/material";

const NewGroup = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create New Group</DialogTitle>
    </Dialog>
  );
};

export default NewGroup;
