import styles from "./EditActivityGroup.module.css";
import { ActivityItem } from "../ActivityItem/ActivityItem";
import { memo } from "react";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

export const GroupActivities = memo(
  ({ groupActivities, showAddItem, showEditItem }: any) => (
    <div className={styles.activitiesContainer}>
      {groupActivities.map((activity: any) => (
        <ActivityItem
          key={activity.name}
          onClick={() => showEditItem(activity.id, activity.name)}
        >
          <span className={styles.activityText}>{activity.name}</span>
        </ActivityItem>
      ))}
      <ActivityItem selected onClick={showAddItem}>
        <IonIcon icon={add} className={styles.icon} />
      </ActivityItem>
    </div>
  )
);
