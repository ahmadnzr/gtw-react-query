import axios from "axios";
import { BASE_URL } from "../utils/constant";

export const getPostComments = async ({ postId }) => {
  if (!postId) return;
  const response = await axios.get(BASE_URL + "/posts/" + postId + "/comments");
  return response.data;
};
