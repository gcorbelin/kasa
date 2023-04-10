import { NavLink } from "react-router-dom";
import styles from "./Card.module.scss";

interface CardProps {
  id: string;
  cover: string;
  title: string;
}

export const Card: React.FC<CardProps> = ({ id, cover, title }) => (
  <NavLink to={`/detail/${id}`} id={id} className={styles.card}>
    <img src={cover} className={styles["card-img"]} alt="" />
    <h2 className={styles["card-title"]}>{title}</h2>
  </NavLink>
);
