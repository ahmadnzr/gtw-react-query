import axios from "axios";
import { BASE_URL } from "../utils/constant";

export async function getPost() {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
}
