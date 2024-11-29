import classes from "./Post.module.css";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const data = useLoaderData();

  return (
    <>
      {data.posts.length > 0 && (
        <ul className={classes.posts}>
          {data.posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {data.posts.length === 0 && (
        <div>
          <h2>There are no posts yet</h2>
        </div>
      )}
    </>
  );
}

export default PostsList;
