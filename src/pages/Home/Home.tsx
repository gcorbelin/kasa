import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Banner } from "../../components/Banner/Banner";
import bannerImg from "../../assets/images/banner-home.jpg";
import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <PageLayout className={styles.home}>
      <Banner
        imgSrc={bannerImg}
        title="Chez vous, partout et ailleurs"
        size="small"
        className={styles["home-banner"]}
      />
      <div className={styles["card-wrapper"]}>cards</div>
    </PageLayout>
  );
};

export default Home;
