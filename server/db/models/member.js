const { Op, Sequelize } = require("sequelize");
const db = require("../db");

const Member = db.define("members", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lastRead: {
    type: Sequelize.DATE,
    allowNull: true,
  }
});

module.exports = Member;
