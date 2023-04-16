import { useLoaderData } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { getApartment } from "../../api/apartments";
import ApartmentModel from "../../models/apartment";
import { Accordion } from "../../components/Accordion/Accordion";
import starInactive from "../../assets/images/star.svg";
import starActive from "../../assets/images/star-active.svg";
import styles from "./Detail.module.scss";
import { Slideshow } from "../../components/Slideshow/Slideshow";

export function loader({ params }: any) {
  const apartment = getApartment(params.detailId);
  if (apartment) {
    return new ApartmentModel(
      apartment.id,
      apartment.title,
      apartment.cover,
      apartment.pictures,
      apartment.description,
      apartment.host,
      apartment.rating,
      apartment.location,
      apartment.equipments,
      apartment.tags
    );
  } else {
    throw new Response("Not Found", { status: 404 });
  }
}

export const Detail: React.FC = () => {
  const apartmentDetails = useLoaderData() as ApartmentModel;
  const tagsElement = apartmentDetails.tags.map((tag) => (
    <span key={`tag-${tag}`} className={styles.tag}>
      {tag}
    </span>
  ));
  const ratingElement = [...Array(5)].map((star, index) => (
    <>
      {parseInt(apartmentDetails.rating, 10) > index ? (
        <img
          src={starActive}
          alt=""
          height={13}
          className={styles.rating}
          key={`star-${index}`}
        />
      ) : (
        <img
          src={starInactive}
          alt=""
          height={13}
          className={styles.rating}
          key={`star-${index}`}
        />
      )}
    </>
  ));
  const equipmentsElements = apartmentDetails.equipments.map((eq, index) => (
    <li key={`equipment-${index}`}>{eq}</li>
  ));

  return (
    <PageLayout>
      <div className={styles["detail-wrapper"]}>
        <Slideshow imgUrls={apartmentDetails.pictures} />
        <div className={styles["detail-header"]}>
          <div className={styles["detail-summary"]}>
            <div className={styles["detail-title"]}>
              <h1>{apartmentDetails.title}</h1>
              <div className={styles.locatiion}>
                {apartmentDetails.location}
              </div>
            </div>
            <div className={styles["detail-tags"]}>{tagsElement}</div>
          </div>
          <div className={styles["detail-advice"]}>
            <div className={styles["detail-host"]}>
              <span className={styles.title}>
                {apartmentDetails.host.name.replace(" ", "\n")}
              </span>
              <img
                src={apartmentDetails.host.picture}
                alt=""
                className={styles.avatar}
              />
            </div>
            <div className={styles["detail-ratings"]}>{ratingElement}</div>
          </div>
        </div>
        <div className={styles["accordions-wrapper"]}>
          <Accordion
            title="Description"
            keyEvent={`${apartmentDetails.id}-description`}
            size="small"
          >
            {apartmentDetails.description}
          </Accordion>
          <Accordion
            title="Équipements"
            keyEvent={`${apartmentDetails.id}-equipments`}
            size="small"
          >
            <ul>{equipmentsElements}</ul>
          </Accordion>
        </div>
      </div>
    </PageLayout>
  );
};
