import { useRouter } from "next/router";
function UsersById() {
  const router = useRouter();
  const id = router.query.id;
  const foo = router.query.foo;
  return (
    <div>
      Users by id: {id}. <pre>{JSON.stringify({ foo })}</pre>
    </div>
  );
}

export default UsersById;
