const { Task } = require("../models/Task.model");

const taskValidation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({ where: { id } });

    if (!task) {
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });
    }

    req.task = task;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { taskValidation };
