import useSWR from "swr";
import { fetchUsers, fetchUser } from "./users";
import { useState } from 'react';

export function useUsers(offset = 0, limit = 20) {
  return useSWR(() => `/users?limit=${limit}&offset=${offset}`, () => fetchUsers(offset, limit));
}

export function useUser(id: string) {
  return useSWR(() => `/users/${id}`, () => fetchUser(id))
}

export function useUsersWithPagination(initialPage = 0, pageSize = 20) {
  const [page, setPage] = useState(initialPage);
  let nextPage = () => setPage(p => p + 1)
  let prevPage = () => setPage(p => p - 1)
  const { data, error, ...rest } = useUsers((page + 1) * pageSize, page)
  return { data, error, nextPage, prevPage, ...rest }
}