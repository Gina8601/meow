import styles from "./EditActivityGroup.module.css";
import { memo } from "react";

export const Title = memo(({ text }: any) => (
  <div className={styles.textContainer}>
    <span className={styles.title}>{text}</span>
  </div>
));
