import { RemixiconComponentType } from "@remixicon/react";

export type FileTypes = "design" | "gallery" | "document" | "other";

export type User = {
  name: string;
  photoSrc?: string;
};

export type Project = {
  contributors: string[];
  name: string;
  creationDate: string;
};

export type File = {
  type: FileTypes;
  name: string;
  members: number;
  lastModified: string;
};

export type StorageElement = {
  name: string;
  numberOfFiles: number;
  gb: number;
  type: FileTypes;
};

export type Option = {
  icon: RemixiconComponentType;
  label: string;
  action?: () => void;
};

export type Link = {
  icon: RemixiconComponentType;
  label: string;
  to: string;
};
