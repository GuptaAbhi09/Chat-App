import { Box } from "@mui/material";
import Chat from "./Chat";

const Home = () => {
  return (
    <Box sx={{ height: "calc(100vh - 64px)" }}>
      <Chat />
    </Box>
  );
};

export default Home;
