import { RemixiconComponentType } from "@remixicon/react";

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
