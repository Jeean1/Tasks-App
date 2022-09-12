const express = require("express");
const {
  getAllTask,
  getTaskStatus,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");
const { statusValidation } = require("../middlewares/statusValidation");
const { taskValidation } = require("../middlewares/taskValidationId");

const taskRouter = express.Router();

taskRouter.get("/", getAllTask);

taskRouter.get("/:status", statusValidation, getTaskStatus);

taskRouter.post("/", createTask);

taskRouter.patch("/:id", taskValidation, updateTask);

taskRouter.delete("/:id", taskValidation, deleteTask);

module.exports = { taskRouter };
