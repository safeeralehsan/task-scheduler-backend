"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskCreationSchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../shared/constants");
exports.taskCreationSchema = zod_1.z.object({
    title: zod_1.z.string().min(5, { message: 'Task title is required and must be 5 characters long at least.' }),
    description: zod_1.z.string().min(5, { message: 'Task description is required and must be 5 characters long at least.' }),
    scheduledTime: zod_1.z.date(),
    status: zod_1.z.nativeEnum(constants_1.TaskStatus, { message: 'Not a valid task status.' })
});
