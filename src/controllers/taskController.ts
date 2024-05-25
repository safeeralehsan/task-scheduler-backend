import { Request, Response } from "express"

export const createTask = (req: Request, res: Response) => {
    console.log(req)
    res.json({ message: 'hello', data: req.body })
}