import React from "react";
import { PageHeader } from "../PageHeader/PageHeader";
import { PageFooter } from "../PageFooter/PageFooter";
import { classNames } from "../../helpers/classNames";
import styles from "./PageLayout.module.scss";

interface PageLayoutProps {
  className?: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  className,
  children,
}) => (
  <div className={classNames(styles.layout, className)}>
    <PageHeader></PageHeader>
    <main className={styles.main}>{children}</main>
    <PageFooter></PageFooter>
  </div>
);
