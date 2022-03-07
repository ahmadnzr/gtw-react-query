import { useQuery } from "react-query";
import { getPost, getPosts, getPostsByUserId } from "../api/posts";

export const usePosts = () => {
  return useQuery("posts", getPosts);
};

export const usePost = ({ postId }) => {
  return useQuery(["post", postId], () => getPost({ postId }));
};

export const usePostWithUser = ({ userId }) => {
  return useQuery(["user_post", userId], () => getPostsByUserId({ userId }));
};
