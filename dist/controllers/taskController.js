"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const createTask = (req, res) => {
    console.log(req);
    res.json({ message: 'hello', data: req.body });
};
exports.createTask = createTask;
