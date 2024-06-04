import { useContext } from "react";
import Post from "./Post";
import { postListContext } from "../store/post-list-store";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "./Spinner";

const PostList = () => {
  const { postList, dataFetched } = useContext(postListContext);

  return (
    <>
      {!dataFetched && <Spinner />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
