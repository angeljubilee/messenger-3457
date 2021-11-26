const { Op, Sequelize } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {
  name: {
    type: Sequelize.STRING,
  }
});

module.exports = Conversation;
