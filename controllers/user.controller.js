const { Task } = require("../models/Task.model");
const { User } = require("../models/User.model");

const getAllUser = async (req, res) => {
  try {
    const user = await User.findAll({
      where: { status: "active" },
      attributes: ["id", "name", "email", "status", "createdAt"],
    });

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const NewUser = await User.create({ name, email, password });

    res.status(201).json({ NewUser });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const { user } = req;

    await user.update({ name, email });

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { user } = req;

    await user.update({ status: "disabled" });

    res.status(204).json({
      status: "success",
      message: "user disabled",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
