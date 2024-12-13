import styles from "./more-space.module.scss";

export const MoreSpace = () => {
  return (
    <section className={styles.container}>
      <figure className={styles.figure}></figure>
      <article className={styles.text}>
        <h2 className={styles.title}>Buy more space now!</h2>
        <p className={styles.subtitle}>Upgrade to cloud premium</p>
      </article>
      <button className={styles.button}>
        Upgrade Account!
      </button>
    </section>
  );
};
