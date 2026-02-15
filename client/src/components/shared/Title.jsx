import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

const Title = ({ 
    title="Chat App", 
    description="A simple chat application" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
