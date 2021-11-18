const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const Member = require("./member");

// associations

User.hasMany(Conversation);
Members.belongsTo(Conversation);
Message.belongsTo(Conversation);
Conversation.hasMany(Message);
Conversation.hasMany(Member);

module.exports = {
  User,
  Conversation,
  Message,
  Member
};
