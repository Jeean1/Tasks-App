const express = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { createUserValidation } = require("../middlewares/createUserValidaton");
const { userValidator } = require("../middlewares/userValidationId");

const userRouter = express.Router();

userRouter.get("/", getAllUser);

userRouter.post("/", createUserValidation, createUser);

userRouter.patch("/:id", userValidator, updateUser);

userRouter.delete("/:id", userValidator, deleteUser);

module.exports = { userRouter };
