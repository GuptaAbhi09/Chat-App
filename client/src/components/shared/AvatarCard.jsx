import { Avatar, Box } from "@mui/material";

const AvatarCard = ({ avatars = [], max = 3 }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {avatars.slice(0, max).map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar}
          sx={{
            width: 36,
            height: 36,
            ml: index !== 0 ? -1.2 : 0,
            border: "2px solid white",
            zIndex: max - index,
          }}
        />
      ))}
    </Box>
  );
};

export default AvatarCard;
