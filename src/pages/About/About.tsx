import { PageLayout } from "../../components/PageLayout/PageLayout";
import bannerImg from "../../assets/images/banner-about.jpg";
import { Banner } from "../../components/Banner/Banner";
import { Accordion } from "../../components/Accordion/Accordion";
import styles from "./About.module.scss";

export const About: React.FC = () => (
  <PageLayout>
    <Banner
      imgSrc={bannerImg}
      size="default"
      className={styles["about-banner"]}
    ></Banner>
    <div className={styles["about-content"]}>
      <Accordion title="Fiabilité" keyEvent="about-1">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </Accordion>
      <Accordion title="Respect" keyEvent="about-2">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </Accordion>
      <Accordion title="Service" keyEvent="about-3">
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </Accordion>
      <Accordion title="Sécurité" keyEvent="about-4">
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </Accordion>
    </div>
  </PageLayout>
);
