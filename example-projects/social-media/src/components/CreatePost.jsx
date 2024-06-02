import { useContext, useRef } from "react";
import { postListContext } from "../store/post-list-store";

const CreatePost = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const userIdRef = useRef();
  const reactionsRef = useRef();
  const tagsRef = useRef();
  const imageRef = useRef();

  const { addPost } = useContext(postListContext);
  const handleAddpost = (event) => {
    event.preventDefault();
    addPost(
      userIdRef.current.value,
      titleRef.current.value,
      bodyRef.current.value,
      reactionsRef.current.value,
      tagsRef.current.value.split(" "),
      imageRef.current.value
    );
    userIdRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
    reactionsRef.current.value = "";
    tagsRef.current.value = "";
    imageRef.current.value = "";
  };

  return (
    <form
      className="create-post-container"
      onSubmit={(event) => handleAddpost(event)}
    >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Please Enter your User Id here"
          ref={userIdRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
          ref={titleRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Body
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it...."
          ref={bodyRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Post Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
          ref={reactionsRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter the Hashtags using space"
          ref={tagsRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          placeholder="Please enter the Hashtags using space"
          ref={imageRef}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
