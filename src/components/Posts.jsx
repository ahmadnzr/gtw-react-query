import { useQueryClient } from "react-query";
import { usePosts } from "../queries/posts";

const Posts = () => {
  const queryClient = useQueryClient();
  const { status, data, error } = usePosts();

  return (
    <div>
      <h1># Posts</h1>
      <div>
        {status === "loading" ? (
          <p>Loading....</p>
        ) : status === "error" ? (
          <p>Error: {error.message}</p>
        ) : (
          data.map((post) => <p key={post.id}>{post.title}</p>)
        )}
      </div>
    </div>
  );
};

export default Posts;
