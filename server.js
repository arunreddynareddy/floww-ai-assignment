import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import route from "./routes/transactionRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

mongoose
.connect(MONGOURL)
.then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
})
.catch((error) => {
    console.log(error)
})


app.use("/api", route)