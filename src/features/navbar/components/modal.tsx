import { RemixiconComponentType } from "@remixicon/react";
import styles from "./modal.module.scss";
import { Option } from "../types";

type ModalProps = {
  options: Option[];
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  options,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
