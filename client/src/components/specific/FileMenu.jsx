import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const FileMenu = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Select Attachment</DialogTitle>

      <DialogContent>
        <List>
          <ListItem button>
            <ListItemText primary="Image" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Video" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Document" />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default FileMenu;
