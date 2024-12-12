import { RiSearchLine } from "@remixicon/react";
import styles from "./search-field.module.scss";

export const SearchField = () => {
  return (
    <div className={styles.field}>
      <RiSearchLine className={styles.icon} />
      <input type="text" placeholder="Search" className={styles.input} />
    </div>
  );
};
