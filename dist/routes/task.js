"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationMiddleware_1 = require("../middleware/validationMiddleware");
const taskSchemas_1 = require("../schemas/taskSchemas");
const taskController_1 = require("../controllers/taskController");
const app = (0, express_1.default)();
exports.taskRouter = express_1.default.Router();
exports.taskRouter.post("/", (0, validationMiddleware_1.validateData)(taskSchemas_1.taskCreationSchema), taskController_1.createTask);
