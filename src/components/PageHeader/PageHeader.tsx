import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import styles from "./PageHeader.module.scss";

export const PageHeader: React.FC = () => (
  <header className={styles.header}>
    <div>
      <img src={logo} alt="Kasa logo" className={styles.logo} />
    </div>

    <nav>
      <ul className={styles["nav-list"]}>
        <li>
          <NavLink to={`/`}>Accueil</NavLink>
        </li>
        <li>
          <NavLink to={`/about`}>À propos</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
