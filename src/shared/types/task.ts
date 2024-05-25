import { TaskStatus } from "../constants"

export type Task = {
    id: string,
    title: string,
    description: string,
    scheduledTime: string,
    status: keyof typeof TaskStatus
}