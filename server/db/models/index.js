const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const Member = require("./member");

// associations
User.hasMany(Member);
Member.belongsTo(User);
Member.belongsTo(Conversation);
Message.belongsTo(Conversation);
Conversation.hasMany(Message);
Conversation.hasMany(Member);

module.exports = {
  User,
  Conversation,
  Message,
  Member
};
