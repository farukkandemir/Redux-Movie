import React from "react";
import styles from "./Header.module.css";
import {BsSearch} from "react-icons/bs";

function Header() {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.header}>Movie App</h1>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for Movies" className={styles.search} />
        <BsSearch size="1.3rem" color="red" />
      </div>
    </section>
  );
}

export default Header;
