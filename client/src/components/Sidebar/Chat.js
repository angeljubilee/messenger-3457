import React, { useMemo } from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent, UnreadMsgCount } from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { connect } from "react-redux";
import { markMessagesRead } from "../../store/utils/thunkCreators";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "grab"
    }
  }
}));

const Chat = (props) => {
  const classes = useStyles();
  const { markMessagesRead, conversation } = props;
  const { otherUser } = conversation;

  const unreadMsgs = useMemo(() => {
    if (!conversation.messages) {
      return [];
    }

    let unreadMsgs = [];
    for (let i = 0; i < conversation.messages.length; i++) {
      let msg = conversation.messages[i];
      if (!msg.msgRead && msg.senderId === otherUser.id) {
        unreadMsgs.push(msg.id);
      }
    }
    return unreadMsgs;
  }, [conversation, otherUser]);

  const handleClick = async (conversation) => {
    await props.setActiveChat(conversation.otherUser.username);
    if (unreadMsgs.length > 0) {
      markMessagesRead(unreadMsgs);
    }
  };

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} unreadCount={unreadMsgs.length} />
      <UnreadMsgCount unreadCount={unreadMsgs.length}/>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    },
    markMessagesRead: (msgIds) => {
      dispatch(markMessagesRead(msgIds));
    }
  };
};

export default connect(null, mapDispatchToProps)(Chat);
