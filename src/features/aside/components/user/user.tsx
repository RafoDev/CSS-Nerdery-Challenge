import { RiNotification3Line, RiSettings5Line } from "@remixicon/react";
import styles from "./user.module.scss";
import { UserType } from "../../types";

type UserProps = {
  data: UserType;
};

export const User: React.FC<UserProps> = ({ data }) => {
  const { name, photoSrc } = data;

  return (
    <article className={styles.container}>
      <div className={styles.iconContainer}>
        <RiNotification3Line className={styles.notifications} />
        <RiSettings5Line className={styles.settings} />
      </div>
      <div className={styles.userContainer}>
        <p className={styles.name}>{name}</p>
        <div className={styles.pictureContainer}>
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={`${name} Profile's Picture`}
              className={styles.profilePicture}
            />
          ) : (
            <div className={styles.defaultPic} />
          )}
        </div>
      </div>
    </article>
  );
};
