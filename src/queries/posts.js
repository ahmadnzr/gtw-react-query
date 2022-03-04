import { useQuery } from "react-query";
import { getPost } from "../api/posts";

export const usePosts = () => {
  return useQuery("posts", getPost);
};
