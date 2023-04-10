import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <PageLayout className={styles.App}>
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
