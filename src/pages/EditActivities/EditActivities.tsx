import { memo } from "react";
import { EditActivityGroups } from "../../components/EditActivityGroups/EditActivityGroups";
import styles from "./EditActivities.module.css";

export const EditActivities = memo(
  ({ localGroups, setLocalGroups, localActivities, setLocalActivities }: any) => {
    return (
      <div className={styles.container}>
        <EditActivityGroups
          localActivities={localActivities}
          setLocalActivities={setLocalActivities}
          localGroups={localGroups}
          setLocalGroups={setLocalGroups}
        />
      </div>
    );
  }
);
