import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styles from "./Error.module.scss";
import { Link } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout/PageLayout";

export const Error: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <PageLayout>
        <div className={styles.error}>
          <h1 className={styles.title}>{error.status}</h1>
          <p className={styles.complementary}>
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to={`/`} className={styles.link}>
            Retourner sur la page d’accueil
          </Link>
        </div>
      </PageLayout>
    );
  } else {
    return <></>;
  }
};
