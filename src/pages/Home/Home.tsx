import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import logo from "../../assets/Images/logo.svg";
import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <PageLayout className={styles.App}>
      <img src={logo} className={styles["App-logo"]} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={styles["App-link"]}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </PageLayout>
  );
};

export default Home;
