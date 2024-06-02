import { createContext, useReducer } from "react";

export const postListContext = createContext({
  postList: [],
  addPost: () => {},
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
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
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
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <postListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </postListContext.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peeace out.",
    reactions: 0,
    userId: "",
    tags: ["vacation", "Mumbai", "Enjoy"],
    image:
      "https://th.bing.com/th/id/OIP.5YGzsb62dMxHnIwvo20uCAHaEv?rs=1&pid=ImgDetMain",
  },
  {
    id: "2",
    title: "Pass Ho gaye hai vai",
    body: "4 saal k masti k baad bhi ho gaye hai pass, unbellivable",
    reactions: 12,
    userId: "",
    tags: ["pass", "B,tech", "Unbelivable"],
    image:
      "https://gsb.touro.edu/media/touro-college/content-assets/images/events/iStock-1199590896.jpg",
  },
];

export default PostListProvider;
