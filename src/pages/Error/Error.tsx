import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styles from "./Error.module.scss";
import { Link } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout/PageLayout";

export const Error: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <PageLayout>
        <div className={styles.error}>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <h2>{error.status}</h2>
          <p>
            <i>{error.statusText || ""}</i>
          </p>
          <Link to={`/`}>Back to homepage</Link>
        </div>
      </PageLayout>
    );
  } else {
    return <></>;
  }
};
