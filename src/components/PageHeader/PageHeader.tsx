import React from "react";
import styles from "./PageHeader.module.scss";

export const PageHeader: React.FC = () => (
  <header className={styles.header}>
    <div>Logo</div>
    <div>Menu</div>
  </header>
);
