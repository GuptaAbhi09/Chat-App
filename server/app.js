import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './utils/db.js';
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

//connect db before server start
await connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use("/api/users", userRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`server is running on port :${PORT}`);
})