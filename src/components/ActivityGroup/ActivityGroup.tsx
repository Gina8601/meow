import styles from "./ActivityGroup.module.css";
import { ActivityItem } from "../ActivityItem/ActivityItem";
import { memo, useCallback, useMemo } from "react";
import { useCalendarStore } from "../../store";

const selection = (id: any) => (selected: any) => {
  const newActivities = selected?.filter((it: any) => it !== id) || [];

  if (selected?.length > newActivities.length) return newActivities;

  return newActivities.concat(id);
};

const activitiesSelector = (state: any) => state.activities;

export const ActivityGroup = memo(({ selected, setSelected, group }: any) => {
  const activities = useCalendarStore(activitiesSelector);
  const handleSelect = useCallback(
    (id: any) => () => setSelected(selection(id)),
    []
  );

  const groupActivities = useMemo(
    () =>
      group.activities.map((id: number) =>
        activities.find((it: any) => it.id === id)
      ),
    [group, activities]
  );

  return (
    <div className={styles.container}>
      <Title group={group} />
      <div className={styles.activitiesContainer}>
        {groupActivities.map((activity: any) => (
          <ActivityItem
            key={activity!!.name}
            selected={selected?.find((id: any) => id === activity.id)}
            onClick={handleSelect(activity.id)}
          >
            <span className={styles.activityText}>{activity!!.name}</span>
          </ActivityItem>
        ))}
      </div>
    </div>
  );
});

const Title = memo(({ group: { name } }: any) => (
  <div className={styles.textContainer}>
    <span className={styles.title}>{name}</span>
  </div>
));
