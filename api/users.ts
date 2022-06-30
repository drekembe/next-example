import type { User } from './types';

export async function fetchUsers(limit = 20, offset = 0): Promise<User[]> {
  const resp = await fetch(`/api/users/?limit=${limit}&offset=${offset}`)
  const json = await resp.json()
  await new Promise(r => setTimeout(r, 300));
  const { users } = json;
  return users;
}

export async function fetchUser(id: string): Promise<User | null> {
  const resp = await fetch(`/api/users/${id}`)
  const json = await resp.json()
  await new Promise(r => setTimeout(r, 300));
  const { user } = json;
  return user;
}

export async function createUser(user: User): Promise<User> {
  const rawResponse = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const json = await rawResponse.json();
  return json.user;
}