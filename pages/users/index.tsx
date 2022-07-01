import { useUsers } from "api/hooks";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { FaClock, FaHourglass } from "react-icons/fa";
import { UserCard } from "components/UserCard";

function Pager({ page }: { page: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <NextLink href={`?page=${page - 1}`}>Prev page</NextLink>
      <NextLink href={`?page=${page + 1}`}>Next page</NextLink>
    </div>
  );
}

function UserList({ page }: { page: number }) {
  const { data, error, isValidating } = useUsers(page * 20, 20);
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
        {isValidating && (
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <FaHourglass />
          </div>
        )}
        {error && <pre>whoops, error!</pre>}
        {!data && !error && (
          <div style={{ margin: "0 auto" }}>
            <FaClock />
          </div>
        )}
        {data &&
          data.map((user) => (
            <div style={{ marginBottom: "2rem" }} key={user.id}>
              <UserCard>{user}</UserCard>
            </div>
          ))}
      </div>
    </>
  );
}

function Users() {
  const { query } = useRouter();
  const page = typeof query.page === "string" ? Number.parseInt(query.page) : 0;
  return (
    <>
      <Pager page={page} />
      <UserList page={page} />
      <Pager page={page} />
    </>
  );
}

export default Users;
