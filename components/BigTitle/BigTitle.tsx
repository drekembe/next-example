import React from "react";
import styles from "./styles.module.scss";

export function BigTitle({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.title}>{children}</h1>;
}
