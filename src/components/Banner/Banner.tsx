import { classNames } from "../../helpers/classNames";
import styles from "./Banner.module.scss";

interface BannerProps {
  imgSrc: string;
  title?: string;
  hasOverlay?: boolean;
  size?: "small" | "default" | "large";
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({
  imgSrc,
  title,
  hasOverlay = true,
  size = "default",
  className,
}) => (
  <div
    className={classNames(
      styles["banner"],
      styles[`banner--${size}`],
      hasOverlay ? styles["banner--overlay"] : "",
      className
    )}
  >
    <img src={imgSrc} alt="" className={styles["banner-img"]} />
    {title && <h1 className={styles["banner-title"]}>{title}</h1>}
  </div>
);
