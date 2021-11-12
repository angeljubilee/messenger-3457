import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    letterSpacing: -0.17,
  },
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
    color: 	theme.palette.text.main,
    letterSpacing: -0.17
  }
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation, unreadCount } = props;
  const { latestMessageText, otherUser } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={(unreadCount > 0)
          ? classes.boldText : classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatContent;
