import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../data/store/post/selectors";
import { loadPosts } from "../../service/post.service";
import Post from "../post/post";

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  if (posts.length === 0) {
    loadPosts(dispatch, 0);
  }

  return (
    <div className="post-list">
      {posts.map((postItem, index) => (
        <Post key={index} post={postItem} />
      ))}
    </div>
  );
}

export default PostList;
