const express = require("express");
const { taskRouter } = require("./routes/TaskRouter");
const { userRouter } = require("./routes/userRouter");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server `,
  });
});

module.exports = { app };
