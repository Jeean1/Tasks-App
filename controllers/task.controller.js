const { Task } = require("../models/Task.model");
const { User } = require("../models/User.model");

const getAllTask = async (req, res) => {
  try {
    const task = await Task.findAll({
      include: { model: User, attributes: ["id", "name", "email", "status"] },
    });

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getTaskStatus = async (req, res) => {
  try {
    const { status } = req;

    const task = await Task.findAll({
      where: { status },
      include: { model: User, attributes: ["id", "name", "email", "status"] },
    });

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const { title, userId, startDate, limitDate } = req.body;

    const task = await Task.create({ title, userId, startDate, limitDate });

    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { finishDate } = req.body;

    const { task } = req;

    if (task.status !== "active") {
      return res.status(400).json({
        status: "error",
        message: "Status its not active",
      });
    }

    const dateFinish = new Date(finishDate);
    const limitDate = new Date(task.limitDate);

    if (dateFinish > limitDate) {
      await task.update({ finishDate, status: "late" }, { where: task.id });
    } else {
      await task.update(
        { finishDate, status: "completed" },
        { where: task.id }
      );
    }
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { task } = req;

    task.update({ status: "cancelled" });

    res.status(200).json({
      status: "success",
      message: "cancelled",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTask,
  getTaskStatus,
  createTask,
  updateTask,
  deleteTask,
};
