import { RiMore2Fill } from "@remixicon/react";
import styles from "./project.module.scss";
import { Project as ProjectType } from "../../../../shared/types/entities";

type ProjectProps = {
  data: ProjectType;
};

const maxContributors = 3;

export const Project: React.FC<ProjectProps> = ({ data }) => {
  const setContributors = () => {
    const { contributors } = data;
    if (contributors.length > maxContributors) {
      return [
        ...contributors.slice(0, maxContributors - 1),
        `+${contributors.length - maxContributors}`,
      ];
    }
    return contributors;
  };
  const contributors = setContributors() ?? [];

  return (
    <article className={styles.container}>
      <div className={styles.folders}></div>
      <div className={styles.contributors}>
        {contributors?.map((contributor, index) => (
          <div className={styles.contributor} key={index}>
            <span className={styles.contributorLabel}>{contributor}</span>
          </div>
        ))}
      </div>
      <RiMore2Fill className={styles.more} />
      <h3 className={styles.name}>{data.name}</h3>
      <p className={styles.creationDate}>Created: {data.creationDate}</p>
    </article>
  );
};
