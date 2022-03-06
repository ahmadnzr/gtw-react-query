import axios from "axios";
import { BASE_URL } from "../utils/constant";

export async function getPosts() {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
}

export const getPost = async ({ postId }) => {
  const response = await axios.get(BASE_URL + "/posts/" + postId);
  return response.data;
};
