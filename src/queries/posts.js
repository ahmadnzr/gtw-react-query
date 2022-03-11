import { useQuery, useQueryClient, useInfiniteQuery } from "react-query";
import { getPost, getPosts, getPostsByUserId } from "../api/posts";

export const usePosts = ({ pageParam }) => {
  return useInfiniteQuery(["posts", pageParam], getPosts, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 10) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
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
