import React from "react";
import styles from "./styles.module.scss";
import NextLink from "next/link";
import Image from "next/image";
import logo from "public/logo.svg";
import { FaUserCircle } from "react-icons/fa";
import { usernameAtom } from "store";
import { useAtom } from "jotai";

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * The main layout component
 */
export function MainLayout({ children }: MainLayoutProps) {
  // This is how you access/update shared state with jotai
  const [username, setUsername] = useAtom(usernameAtom);
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <NextLink href="/">
          <div className={styles.logo}>
            <Image src={logo} alt="Logo" className={styles.logo} />
          </div>
        </NextLink>
        <NextLink href="/about">About</NextLink>
        <NextLink href="/users">Users</NextLink>
        <NextLink href="/settings">Settings</NextLink>
        <div className={styles.user}>
          <FaUserCircle
            style={{ marginRight: "1rem", color: "gray" }}
            size={24}
          />{" "}
          {username}
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
