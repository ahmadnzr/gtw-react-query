import { useQuery } from "react-query";
import { getUserById } from "../api/users";

export const useUser = ({ userId }) => {
  const user = useQuery(["user", userId], () => getUserById({ userId }));
  return user;
};
