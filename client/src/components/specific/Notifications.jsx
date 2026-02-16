import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Avatar,
  Button,
  Divider,
} from "@mui/material";

import { sampleNotifications } from "../../constants/sampleData";

const Notifications = ({ open, handleClose }) => {
  const handleRequest = (status, id) => {
    console.log(status, "for notification:", id);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Notifications</DialogTitle>

      <DialogContent>
        {sampleNotifications.length === 0 ? (
          <Typography textAlign="center" sx={{ mt: 2 }}>
            No Notifications
          </Typography>
        ) : (
          sampleNotifications.map((item) => (
            <Box key={item._id}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 1.5,
                }}
              >
                {/* LEFT SIDE */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Avatar src={item.sender.avatar} />
                  <Typography variant="body2">
                    {item.sender.name} sent you a friend request
                  </Typography>
                </Box>

                {/* RIGHT SIDE */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleRequest("accepted", item._id)}
                  >
                    Accept
                  </Button>

                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => handleRequest("rejected", item._id)}
                  >
                    Reject
                  </Button>
                </Box>
              </Box>

              <Divider />
            </Box>
          ))
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Notifications;
