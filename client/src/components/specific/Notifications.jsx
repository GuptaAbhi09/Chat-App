import React from "react";
import { Dialog, DialogTitle } from "@mui/material";

const Notifications = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Notifications</DialogTitle>
    </Dialog>
  );
};

export default Notifications;
