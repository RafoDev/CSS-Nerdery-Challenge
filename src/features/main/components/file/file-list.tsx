import React from "react";
import styles from "./file-list.module.scss";
import { File } from "./file";
import { File as FileType } from "../../../../shared/types/entities";

type FileListProps = {
  files: FileType[];
};

export const FileList: React.FC<FileListProps> = ({ files }) => {
  return (
    <div className={styles.container}>
      <span className={styles.name}>Name</span>
      <span className={styles.members}>Members</span>
      <span className={styles.lastModified}>Last Modified</span>
      {files.map((file) => (
        <File data={file} key={file.name}/>
      ))}
    </div>
  );
};
