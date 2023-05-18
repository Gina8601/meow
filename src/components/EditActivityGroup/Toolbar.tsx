import styles from "./EditActivityGroup.module.css";
import { ActivityItem } from "../ActivityItem/ActivityItem";
import { memo } from "react";
import { IonIcon } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import pen from "../../pics/icons/pen.svg";
import trash from "../../pics/icons/trash.svg";

export const Toolbar = memo(
  ({ showEdit, switchVisibility, deleteGroup, isHidden }: any) => (
    <div className={styles.groupToolbar}>
      <ActivityItem className={styles.toolbarItem} onClick={showEdit}>
        <IonIcon icon={pen} className={styles.icon} />
      </ActivityItem>
      <ActivityItem className={styles.toolbarItem} onClick={switchVisibility}>
        <IonIcon
          icon={isHidden ? eyeOutline : eyeOffOutline}
          className={styles.icon} />
      </ActivityItem>
      <ActivityItem className={styles.toolbarItem} onClick={deleteGroup}>
        <IonIcon icon={trash} className={styles.icon} />
      </ActivityItem>
    </div>
  )
);
