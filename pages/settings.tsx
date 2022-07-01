import { NextPage } from "next";
import { useAtom } from "jotai";
import { usernameAtom } from "store";

const Settings: NextPage = () => {
  // This is an example of how to change some global state with jotai
  const [username, setUsername] = useAtom(usernameAtom);
  return (
    <>
      <label>My username</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
    </>
  );
};

export default Settings;
