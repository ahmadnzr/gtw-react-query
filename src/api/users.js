import axios from "axios";
import { BASE_URL } from "../utils/constant";

export const getUserById = async ({ userId }) => {
  if (!userId) return;
  const response = await axios.get(BASE_URL + "/users/" + userId);
  return response.data;
};
