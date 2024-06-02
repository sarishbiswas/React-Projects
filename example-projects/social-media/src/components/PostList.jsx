import { useContext } from "react";
import Post from "./Post";
import { postListContext } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(postListContext);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
