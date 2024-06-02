import { createContext, useReducer } from "react";

export const postListContext = createContext({
  postList: [],
  addPost: () => {},
  addPosts: () => {},
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

  const addPost = (userId, title, body, reactions, tags, image) => {
    console.log(userId, title, body, reactions, tags, new Date());
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: new Date(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
        image: image,
      },
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

  return (
    <postListContext.Provider
      value={{ postList, addPost, addPosts, deletePost }}
    >
      {children}
    </postListContext.Provider>
  );
};

export default PostListProvider;
