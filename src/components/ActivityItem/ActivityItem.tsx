import { memo } from "react";
import styles from "./ActivityItem.module.css";

export const ActivityItem = memo(
  ({ selected, children, onClick, className }: any) => {
    return (
      <div
        className={[
          styles.activity,
          className,
          selected ? styles.selected : "",
        ].join(" ")}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);
