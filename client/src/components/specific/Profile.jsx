import {
  Box,
  Avatar,
  Typography,
  Paper,
  Divider,
  Button,
} from "@mui/material";

const Profile = ({
  user = {
    name: "Abhishek Kumar",
    username: "abhishek_07",
    bio: "Full Stack Developer 🚀",
    avatar: "",
  },
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        p: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 320,
          borderRadius: 3,
          p: 3,
          textAlign: "center",
        }}
      >
        {/* Avatar */}
        <Avatar
          src={user.avatar}
          sx={{
            width: 100,
            height: 100,
            margin: "auto",
            mb: 2,
          }}
        />

        {/* Name */}
        <Typography variant="h6" fontWeight="600">
          {user.name}
        </Typography>

        {/* Username */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          @{user.username}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Bio */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          {user.bio}
        </Typography>

        <Button
          variant="outlined"
          fullWidth
          sx={{ borderRadius: 2 }}
        >
          Edit Profile
        </Button>

        <Button
          variant="outlined"
          fullWidth
          sx={{ borderRadius: 2, marginTop: 1 }}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default Profile;
