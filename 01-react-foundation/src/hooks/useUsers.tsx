import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { ReqResListResponse, User } from "../interfaces";

const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResListResponse>(
      "https://reqres.in/api/users",
      {
        params: { page },
      }
    );
    return data.data;
  } catch (error) {
    console.log({ error });

    return [];
  }
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const currentPageRef = useRef(1);
  useEffect(() => {
    loadUsers(currentPageRef.current).then((data) => setUsers(data));
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = () => {
    if (currentPageRef.current == 1) return;
    currentPageRef.current--;
    loadUsers(currentPageRef.current).then((data) => setUsers(data));
  };

  return {
    prevPage,
    nextPage,
    users,
  };
};
