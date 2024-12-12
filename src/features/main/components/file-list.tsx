import React from "react";
import styles from "./file-list.module.scss";
import { File as FileType } from "../types";
import { File } from "./file";

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
        <File data={file} />
      ))}
    </div>
  );
};
