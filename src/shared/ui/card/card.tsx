import { RiMore2Fill } from "@remixicon/react";

type elementType = "design" | "gallery" | "document" | "folder";

export type Member = { name: string };

export type CardType = {
  type?: elementType;
  name: string;
  members: Member[];
  creationDate?: string;
  lastModified?: string;
};

export type CardProps = {
  data: CardType;
  styles: CSSModuleClasses;
  list?: boolean;
  more?: boolean;
};

const maxMembers = 3;

export const Card: React.FC<CardProps> = ({ data, styles, more = false }) => {
  const { name, members, creationDate } = data;

  const truncateMembers = () => {
    if (members.length > maxMembers) {
      return [
        ...members.slice(0, maxMembers - 1),
        { name: `+${members.length - maxMembers}` },
      ];
    }
    return members;
  };
  const processedMembers = truncateMembers();

  return (
    <article className={`${styles.container}`}>
      <div className={styles.folders}></div>
      <div className={styles.contributors}>
        {processedMembers?.map((member, index) => (
          <div className={styles.contributor} key={index}>
            <span className={styles.contributorLabel}>{member.name}</span>
          </div>
        ))}
      </div>
      {more && <RiMore2Fill className={styles.more} />}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.creationDate}>Created: {creationDate}</p>
    </article>
  );
};
