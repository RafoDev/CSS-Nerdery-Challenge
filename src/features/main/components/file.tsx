import styles from "./file.module.scss";
import { File as FileType } from "../types";
import { RiMoreFill } from "@remixicon/react";

type FileProps = {
  data: FileType;
};

export const File: React.FC<FileProps> = ({ data }) => {
  const { type, name, members, lastModified } = data;
  return (
    <article className={styles.container}>
      <div className={`${styles.type} ${styles[type]}`}></div>
      <span className={styles.name}>{name}</span>
      <span className={styles.members}>{members} members</span>
      <span className={styles.lastModified}>{lastModified}</span>
      <RiMoreFill className={styles.more}/>
    </article>
  );
};