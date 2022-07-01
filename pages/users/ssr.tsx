import { useUsers } from "api/hooks";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { FaClock, FaHourglass } from "react-icons/fa";
import { UserCard } from "components/UserCard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { User } from "api/types";

/** This is the same as the /users page, but it's server rendered */

function Pager({ page }: { page: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <NextLink href={`?page=${page - 1}`}>Prev page</NextLink>
      <NextLink href={`?page=${page + 1}`}>Next page</NextLink>
    </div>
  );
}

function UserList({
  page,
  children: users,
}: {
  page: number;
  children: User[];
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: "60vh",
          padding: "1rem",
          overflow: "scroll",
        }}
      >
        {users.map((user) => (
          <div style={{ marginBottom: "2rem" }} key={user.id}>
            <UserCard>{user}</UserCard>{" "}
          </div>
        ))}
      </div>
    </>
  );
}

function Users({
  users,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { query } = useRouter();
  return (
    <>
      <Pager page={page} />
      <UserList page={page}>{users}</UserList>
      <Pager page={page} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  users: User[];
  page: number;
}> = async (context) => {
  const { query } = context;
  const page = typeof query.page === "string" ? Number.parseInt(query.page) : 0;
  let offset = page * 20;
  let limit = 20;
  let resp = await fetch(
    `http://localhost:3000/api/users?limit=${limit}&offset=${offset}`
  );
  let json = await resp.json();
  const { users } = json;
  return {
    props: {
      users,
      page,
    },
  };
};

export default Users;
