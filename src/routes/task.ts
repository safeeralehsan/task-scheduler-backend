import express, { Express, Request, Response, Router } from "express";
import { validateData } from "../middleware/validationMiddleware";
import { taskCreationSchema } from "../schemas/taskSchemas";
import { createTask } from "../controllers/taskController";

const app: Express = express();
export const taskRouter: Router = express.Router();

taskRouter.post("/", validateData(taskCreationSchema), createTask);
