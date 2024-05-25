import express, { Express, Request, Response, Router } from "express";
import { validateData } from "../middleware/validationMiddleware";
import { getTasksSchema, taskCreationSchema } from "../schemas/taskSchemas";
import { createTask, getTasks } from "../controllers/taskController";

const app: Express = express();
export const taskRouter: Router = express.Router();

taskRouter.get("/", getTasks)

taskRouter.post("/", validateData(taskCreationSchema), createTask);
