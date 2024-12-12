import { RiNotification3Line, RiSettings5Line } from "@remixicon/react";
import styles from "./user.module.scss";

export const User = () => {
  return (
    <article className={styles.container}>
      <div className={styles.iconContainer}>
        <RiNotification3Line className={styles.notifications} />
        <RiSettings5Line className={styles.settings} />
      </div>
      <div className={styles.userContainer}>
        <p className={styles.name}>Name</p>
        <div className={styles.photo}></div>
      </div>
    </article>
  );
};
