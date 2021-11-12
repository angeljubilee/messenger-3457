import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bubble: {
    backgroundColor: "#3A8DFF",
    borderRadius: "50%",
  },
  text: {
    fontSize: 14,
    color: theme.palette.text.disabled,
    padding: theme.spacing(.8, 1.6),
    fontWeight: theme.typography.fontWeightBold
  },
}));

const UnreadMessageBadge = (props) => {
  const classes = useStyles();
  const { unreadCount } = props;

  return (
    <>
      {(unreadCount > 0) &&
        <Box className={classes.bubble}>
          <Typography className={classes.text}>
            {unreadCount}
          </Typography>
        </Box>
      }
    </>
  );
};

export default UnreadMessageBadge;
