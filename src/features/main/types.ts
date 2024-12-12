export type Project = {
  contributors: string[];
  name: string;
  creationDate: string;
};

type fileTypes = "design" | "gallery" | "document" | "other";

export type File = {
  type: fileTypes;
  name: string;
  members: number;
  lastModified: string;
};
