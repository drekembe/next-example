import { User } from "api/types";
import Image from "next/image";
import styles from "./styles.module.scss";

interface UserCardProps {
  children: User;
  important?: boolean;
}

export function UserCard({ children: user, important = false }: UserCardProps) {
  const { id, avatarUrl, username, name, phone, company } = user;
  return (
    <div className={styles.container}>
      {avatarUrl && (
        <div className={styles.img}>
          <img src={avatarUrl} />
        </div>
      )}
      <div className={styles.right}>
        <h2 style={{ margin: 0, marginBottom: "0.5rem" }}>{username}</h2>
        <span className={styles.name}>{name}</span>
        {phone && <span className={styles.phone}>{phone}</span>}
      </div>
    </div>
  );
}
