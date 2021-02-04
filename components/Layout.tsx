import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
