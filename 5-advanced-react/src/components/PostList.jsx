import { useContext } from "react";
import Post from "./Post";
import { postListContext } from "../store/post-list-store";
import { useState } from "react";

const PostList = () => {
  const { postList, addPosts } = useContext(postListContext);
  const [dataFetched, setDataFetched] = useState(false);
  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setDataFetched(!dataFetched);
      });
  }
  return (
    <>
      {postList.length === 0 && <h1>There are no Posts Available</h1>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
