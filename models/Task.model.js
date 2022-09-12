const { db, DataTypes } = require("../utils/dataBase.utils");

const Task = db.define("task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  limitDate: {
    type: DataTypes.DATE,
  },
  startDate: {
    type: DataTypes.DATE,
  },

  finishDate: {
    type: DataTypes.DATE,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = { Task };
