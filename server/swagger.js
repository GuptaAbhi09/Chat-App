import swaggerAutogen from "swagger-autogen";

const swagger = swaggerAutogen();

const doc = {
  info: {
    title: "ChatApp API",
    description: "API Documentation",
  },
  host: " http://localhost:5173",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";

const endpointsFiles = [
  "./routes/userRoutes.js",
  "./routes/chatRoutes.js"
];

swagger(outputFile, endpointsFiles, doc);