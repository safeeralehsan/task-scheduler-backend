import { z } from "zod";
import { TaskStatus } from "../shared/constants";

export const taskCreationSchema = z.object({
    title: z.string().min(5, { message: 'Task title is required and must be 5 characters long at least.'}),
    description : z.string().min(5, { message: 'Task description is required and must be 5 characters long at least.'}),
    scheduledTime: z.date(),
    status: z.nativeEnum(TaskStatus, { message: 'Not a valid task status.'})
})