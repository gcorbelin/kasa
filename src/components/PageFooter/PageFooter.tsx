import React from "react";
import logo from "../../assets/images/logo--inverted.svg";
import styles from "./PageFooter.module.scss";

export const PageFooter: React.FC = () => (
  <footer className={styles.footer}>
    <img src={logo} alt="Kasa logo" className={styles.logo} />
    <p>© 2023 Kasa. All rights reserved</p>
  </footer>
);
