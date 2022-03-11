import axios from "axios";
import { BASE_URL } from "../utils/constant";

export async function getPosts({ pageParam = 1 }) {
  const response = await axios.get(
    `${BASE_URL}/posts?_limit=10&_page=${pageParam}`
  );
  return response.data;
}

export const getPost = async ({ postId }) => {
  const response = await axios.get(BASE_URL + "/posts/" + postId);
  return response.data;
};

export const getPostsByUserId = async ({ userId }) => {
  const response = await axios(BASE_URL + "/posts?userId=" + userId);
  return response.data;
};
