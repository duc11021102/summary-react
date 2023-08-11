import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";
const PostList = (props) => {
  const data = useLoaderData();
  return (
    <>
      <ul className={classes.posts}>
        {data.map((post) => <Post key={post.id} id={post.id} author={post.author} text={post.body}></Post>)}
      </ul>
    </>
  );
};
export default PostList;
