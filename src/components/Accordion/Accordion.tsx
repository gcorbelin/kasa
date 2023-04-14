import React, { useState } from "react";
import { classNames } from "../../helpers/classNames";
import styles from "./Accordion.module.scss";
import chevron from "../../assets/images/chevron.svg";

interface AccordionProps {
  title: string;
  keyEvent: string;
  className?: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  keyEvent,
  className,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className={classNames(styles.accordion, className)}>
      <button
        className={classNames(
          styles["accordion-header"],
          isOpen ? styles["is-open"] : ""
        )}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        id={`${keyEvent}-header`}
        aria-controls={`${keyEvent}-content`}
      >
        {title}
        <img src={chevron} alt="" className={styles.icon} width={18} />
      </button>
      {isOpen && (
        <div
          className={styles["accordion-content"]}
          id={`${keyEvent}-content`}
          aria-labelledby={`${keyEvent}-header`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
