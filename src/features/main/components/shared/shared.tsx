import { Card, CardType } from "../../../../shared/ui/card/card";
import styles from "./shared.module.scss";

export const Shared: React.FC<{
  data: CardType;
}> = ({ data }) => {
  return <Card data={data} styles={styles} />;
};
