import React from "react";
import styles from "./storage-element.module.scss";
import { StorageElement as StorageElementType } from "../../../../../shared/types/entities";

type StorageElementProps = {
  data: StorageElementType;
};

export const StorageElement: React.FC<StorageElementProps> = ({ data }) => {
  const { name, numberOfFiles, gb, type } = data;

  return (
    <article className={styles.container}>
      <div className={`${styles.type} ${styles[type]}`}></div>
      <span className={styles.name}>{name}</span>
      <div className={styles.gbContainer}>
        <span className={styles.gb}>{gb} GB</span>
      </div>
      <span className={styles.numberOfFiles}>{numberOfFiles} files</span>
      <div className={styles.moreSpace}>
        
      </div>
    </article>
  );
};
