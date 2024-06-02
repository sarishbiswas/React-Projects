import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { postListContext } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(postListContext);
  return (
    <div className="card post-container" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5
          className="card-title"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {post.title}
          <MdDeleteForever onClick={() => deletePost(post.id)} />
        </h5>
        <p className="card-text">{post.body}</p>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {post.reactions}
        </span>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary post-tag">
            {tag}
          </span>
        ))}
      </div>
      <img src={post.image} className="card-img-top" alt="Image of the Post" />
    </div>
  );
};
export default Post;
