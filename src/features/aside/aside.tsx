import { User as UserType } from "../../shared/types/entities";
import styles from "./aside.module.scss";
import { MoreSpace } from "./components/storage/more-space/more-space";
import { Storage } from "./components/storage/storage";
import { User } from "./components/user/user";

const user: UserType = {
  name: "Name",
};

export const Aside = () => {
  return (
    <aside className={styles.container}>
      <User data={user} />
      <Storage />
      <MoreSpace />
    </aside>
  );
};
