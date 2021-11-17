import React, { useMemo } from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent, UnreadMessageBadge } from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { connect } from "react-redux";

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
  const { conversation } = props;
  const { otherUser } = conversation;

  const unreadMsgCount = useMemo(() => {
    let count = conversation.messages.reduce((acc, curr) => {
      if (!curr.msgRead && curr.senderId === otherUser.id) {
        return acc+1;
      }
      return acc;
    }, 0);
    return count;
  }, [conversation, otherUser]);

  let color;
  let fontSize;
  let fontWeight;

  if (unreadMsgCount > 0) {
    color = 'black';
    fontSize = 14;
    fontWeight = 700;
  } else {
    color = '#9CADC8';
    fontSize = 12;
    fontWeight = 400;
  }

  const handleClick = async (conversation) => {
    await props.setActiveChat(conversation.otherUser.username);
  };

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} color={color}
        fontSize={fontSize} fontWeight={fontWeight} />
      <UnreadMessageBadge unreadCount={unreadMsgCount}/>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Chat);
