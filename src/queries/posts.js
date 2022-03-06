import { useQuery } from "react-query";
import { getPost, getPosts } from "../api/posts";

export const usePosts = () => {
  return useQuery("posts", getPosts);
};

export const usePost = ({ postId }) => {
  return useQuery(["post", postId], () => getPost({ postId }));
};
