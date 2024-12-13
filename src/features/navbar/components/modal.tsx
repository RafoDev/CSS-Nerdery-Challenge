import { Option } from "../../../shared/types/entities";
import styles from "./modal.module.scss";

type ModalProps = {
  options: Option[];
};

export const Modal: React.FC<ModalProps> = ({ options }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.options}>
        {options.map((option) => (
          <li className={styles.option} key={option.label}>
            <option.icon className={styles.optionIcon} />
            <p className={styles.optionLabel}>{option.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
