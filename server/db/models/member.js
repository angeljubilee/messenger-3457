const { Op, Sequelize } = require("sequelize");
const db = require("../db");

const Member = db.define("members", {
  lastRead: {
    type: Sequelize.DATE,
    allowNull: true,
  }
});

module.exports = Member;
