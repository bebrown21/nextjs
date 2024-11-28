import classes from "./Post.module.css";
import Post from "./Post";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Brandon" body="This is awesome" />
      <Post author="Dude" body="This is lame" />
    </ul>
  );
}

export default PostsList;
