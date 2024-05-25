import { z } from "zod";
import { TaskStatus } from "../shared/constants";

export const getTasksSchema = z.object({
    userId: z.string()
})

export const taskCreationSchema = z.object({
    title: z.string().min(5, { message: 'Task title is required and must be 5 characters long at least.'}),
    description : z.string().min(5, { message: 'Task description is required and must be 5 characters long at least.'}),
    scheduledTime: z.string().datetime(),
    status: z.enum([TaskStatus.NOT_STARTED, TaskStatus.COMPLETE], { message: 'Not a valid task status.'})
})