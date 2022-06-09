import React from "react";
import useStyles from "./Styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import { FaThumbsUp } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import moment from "moment";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MdMoreHoriz fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `# ${tag}`)}
          </Typography>
        </div>
        <CardContent>
          <Typography variant="h5">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            {<FaThumbsUp fontSize="small" />}Like {post.likeCount}
          </Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
