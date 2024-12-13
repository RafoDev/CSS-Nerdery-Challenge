import { StorageElement as StorageElementType } from "../../../../shared/types/entities";
import { StorageElement } from "./storage-element/storage-element";
import { StorageChart } from "./storage-chart";
import styles from "./storage.module.scss";

const elements: StorageElementType[] = [
  { type: "design", name: "Documents", numberOfFiles: 720, gb: 200 },
  { type: "document", name: "Documents", numberOfFiles: 720, gb: 125 },
  { type: "gallery", name: "Documents", numberOfFiles: 720, gb: 75 },
  { type: "other", name: "Documents", numberOfFiles: 720, gb: 50 },
];
export const Storage = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Storage</h2>
      <div className={styles.storageChart}>
        <StorageChart />
      </div>
      <p className={styles.summary}>420.2 GB of 500 GB used</p>
      <section className={styles.storageElements}>
        {elements.map((element, index) => (
          <StorageElement key={index} data={element} />
        ))}
      </section>
    </article>
  );
};
