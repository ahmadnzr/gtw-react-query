import { useQuery } from "react-query";
import { getPostComments } from "../api/comments";

export const useComments = ({ postId }) => {
  return useQuery(["comment", postId], () => getPostComments({ postId }));
};
