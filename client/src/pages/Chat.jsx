import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import Title from "../components/shared/Title";

const Chat = () => {
  const { chatId } = useParams();

  return (
    <>
      <Title
        title={`Chat ${chatId}`}
        description="Chat conversation"
      />
      <Typography variant="h5">
        Chat ID: {chatId}
      </Typography>
    </>
  );
};

export default AppLayout(Chat);
