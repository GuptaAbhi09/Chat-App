import { Box, Avatar, Typography, Button } from "@mui/material";

const UserList = ({ users = [] }) => {
  const handleSendRequest = (id) => {
    console.log("Friend request sent to:", id);
  };

  return (
    <Box>
      {users.map((user) => (
        <Box
          key={user._id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 1.5,
            borderBottom: "1px solid #eee",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src={user.avatar} />
            <Typography>{user.name}</Typography>
          </Box>

          {!user.isFriend ? (
            <Button
              variant="contained"
              size="small"
              onClick={() => handleSendRequest(user._id)}
            >
              Add
            </Button>
          ) : (
            <Typography variant="body2" color="green">
              Friends
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default UserList;
