import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Banner } from "../../components/Banner/Banner";
import bannerImg from "../../assets/images/banner-home.jpg";
import styles from "./Home.module.scss";
import { Card } from "../../components/Card/Card";
import { getApartments } from "../../api/apartments";
import { useLoaderData } from "react-router-dom";
import ApartmentModel from "../../models/apartment";

export const homeLoader = () => {
  return getApartments();
};

export const Home: React.FC = () => {
  const apartments = useLoaderData() as ApartmentModel[];
  const apartmentsElem = apartments.map((apart) => (
    <Card
      key={apart.id}
      id={apart.id}
      cover={apart.cover}
      title={apart.title}
    />
  ));
  return (
    <PageLayout className={styles.home}>
      <Banner
        imgSrc={bannerImg}
        title="Chez vous, partout et ailleurs"
        size="small"
        className={styles["home-banner"]}
      />
      <div className={styles["card-wrapper"]}>{apartmentsElem}</div>
    </PageLayout>
  );
};

export default Home;
