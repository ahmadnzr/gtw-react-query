import { useQuery, useQueryClient } from "react-query";
import { getPost, getPosts, getPostsByUserId } from "../api/posts";

export const usePosts = () => {
  return useQuery("posts", getPosts);
};

export const usePost = ({ postId }) => {
  const queryClient = useQueryClient();

  return useQuery(["post", postId], () => getPost({ postId }), {
    initialData: () => {
      const post = queryClient
        .getQueryData("posts")
        ?.find((post) => post.id === parseInt(postId));

      if (post) {
        return {
          data: post,
        };
      } else {
        return undefined;
      }
    },
  });
};

export const usePostWithUser = ({ userId }) => {
  return useQuery(["user_post", userId], () => getPostsByUserId({ userId }));
};
