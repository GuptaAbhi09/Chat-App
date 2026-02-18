import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const ConfirmDeleteDialog = ({
  open,
  handleClose,
  group,
  groups,
  setGroups,
}) => {
  const handleDelete = () => {
    const updatedGroups = groups.filter(
      (g) => g._id !== group._id
    );

    setGroups(updatedGroups);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Group</DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete "{group.name}"?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
