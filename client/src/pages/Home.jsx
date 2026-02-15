import React from "react";
import { Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import Title from "../components/shared/Title";

const Home = () => {
  return (
    <>
      <Title title="Home" description="Home page of chat app" />
      <Typography variant="h4">Welcome Home</Typography>
    </>
  );
};

export default AppLayout(Home);
