const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");

// associations

User.hasMany(Conversation);
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });
ConversationMembers.belongsTo(Conversation);
ConversationMembers.belongsTo(User);
Message.belongsTo(Conversation);
Conversation.hasMany(Message);

module.exports = {
  User,
  Conversation,
  Message
};
