import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  const firstUnreadMessage = messages.findIndex(msg => msg.msgRead === false);
  const lastReadMessage = (firstUnreadMessage === -1)
    ? messages[messages.length - 1].id
    : messages[firstUnreadMessage - 1].id;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} showAvatar={message.id === lastReadMessage} otherUser={otherUser}/>
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}

    </Box>
  );
};

export default Messages;
