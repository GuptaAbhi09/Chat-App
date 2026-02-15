import React from "react";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        404
      </Typography>
      <Typography variant="h6">
        Page Not Found
      </Typography>
    </Box>
  );
};

export default NotFound;
