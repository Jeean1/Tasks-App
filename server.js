const dotenv = require("dotenv");
const { app } = require("./app");
const { initModel } = require("./models/initModels.model");
const { db } = require("./utils/dataBase.utils");

dotenv.config({ path: "./config.env" });

const startServer = async () => {
  try {
    await db.authenticate();

    initModel();

    await db.sync();

    const PORT = 4000;

    app.listen(PORT, () => {
      console.log("Express App Running!");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
