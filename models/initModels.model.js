const { Task } = require("./Task.model");
const { User } = require("./User.model");

const initModel = () => {
  // 1 -- M
  User.hasMany(Task, { foreignKey: 'userId' });
  Task.belongsTo(User);
};

module.exports = { initModel };
