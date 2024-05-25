import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { taskRouter } from "./routes/task";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3005;
const cors = require("cors")

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"]
  })
)
app.use(bodyParser.json())
app.use("/task/", taskRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});