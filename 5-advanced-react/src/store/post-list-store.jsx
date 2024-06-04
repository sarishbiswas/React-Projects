import { createContext, useEffect, useReducer, useState } from "react";

export const postListContext = createContext({
  postList: [],
  addPost: () => {},
  dataFetched: false,
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_ALL_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [dataFetched, setDataFecthed] = useState(false);
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_ALL_POST",
      payload: {
        posts: posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setDataFecthed((prev) => !prev);
      });
    return () => controller.abort();
  }, []);

  return (
    <postListContext.Provider
      value={{ postList, addPost, dataFetched, deletePost }}
    >
      {children}
    </postListContext.Provider>
  );
};

export default PostListProvider;
