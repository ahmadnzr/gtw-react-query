import { useQueryClient } from "react-query";
import { usePosts } from "../queries/posts";
import Post from "./Post";

import style from "./Component.module.css";

const Posts = () => {
  const queryClient = useQueryClient();
  const { status, data, error } = usePosts();

  return (
    <div className={style.wrapper}>
      <h1 className={style.pageTitle}># Post</h1>
      <div className={style.listPosts}>
        {status === "loading" ? (
          <p>Loading....</p>
        ) : status === "error" ? (
          <p>Error: {error.message}</p>
        ) : (
          data.map((post) => <Post key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default Posts;
