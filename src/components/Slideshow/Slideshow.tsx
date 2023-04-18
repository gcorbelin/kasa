import { useState } from "react";
import { Banner } from "../Banner/Banner";
import styles from "./Slideshow.module.scss";
import chevron from "../../assets/images/chevron.svg";
import { classNames } from "../../helpers/classNames";

interface SlideshowProps {
  imgUrls: string[];
  className?: string;
}

export const Slideshow: React.FC<SlideshowProps> = ({ imgUrls, className }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const nbImgs = imgUrls.length;
  const hasControls = nbImgs > 1;

  const goToPreviousImg = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentImg === 0) {
      setCurrentImg(nbImgs - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };

  const goToNextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentImg === nbImgs - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };

  return (
    <div className={classNames(styles.slideshow, className)}>
      {hasControls && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.prev}
            onClick={(e) => {
              goToPreviousImg(e);
            }}
          >
            <img src={chevron} alt="Slide précédente" height={20} />
          </button>
          <button
            type="button"
            className={styles.next}
            onClick={(e) => {
              goToNextImg(e);
            }}
          >
            <img src={chevron} alt="Slide suivante" height={20} />
          </button>
          <div className={styles.current}>
            {currentImg + 1}/{nbImgs}
          </div>
        </div>
      )}
      <Banner imgSrc={imgUrls[currentImg]} size="large" hasOverlay={false} />
    </div>
  );
};
