import styles from "./aside.module.scss";
import { User } from "./components/user/user";

export const Aside = () => {
  return (
    <aside className={styles.container}>
      <User />
    </aside>
  );
};
