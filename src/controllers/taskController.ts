import { Request, Response } from "express"
import { addDoc, collection, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { firestoreDB } from "../shared/config/firestore";
import { TaskStatus } from "../shared/constants";
import { Task } from "../shared/types/task";
import { formatDateToCronSchedule } from "../shared/utils";

const cron = require("node-cron")
const fs = require("fs")
const path = require("path")

export const getTasks = async (req: Request, res: Response) => {
    const taskList: Task[] = []
    const q = query(collection(firestoreDB, "tasks"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        taskList.push(doc.data() as Task)
    });
    res.json(taskList)
} 

export const createTask = async (req: Request, res: Response) => {
    try {
        const task: Task = {
            id: crypto.randomUUID(),
            ...req.body
        }
        const docRef = await addDoc(collection(firestoreDB, "tasks"), task);
        if (task.status === TaskStatus.NOT_STARTED) {
            scheduleTask(docRef.id, new Date(task.scheduledTime))
        }
        console.log("Document written with ID: ", docRef.id);
        res.json(task)
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const scheduleTask = async (docId: string, scheduleTime: Date) => {
    const cronSchedule = formatDateToCronSchedule(scheduleTime)
    cron.schedule(cronSchedule, async () => {
        const taskRef = doc(firestoreDB, "tasks", docId);
        await updateDoc(taskRef, {
            status: TaskStatus.COMPLETE
        });
    }, { timezone: 'Asia/Dhaka' })
}