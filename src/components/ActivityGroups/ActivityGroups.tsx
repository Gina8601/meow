import { memo, useMemo } from "react";
import { ActivityGroup } from "../ActivityGroup/ActivityGroup";
import { useCalendarStore } from "../../store";

const groupsSelector = (state: any) => state.activityGroups;

export const ActivityGroups = memo(({ selected, setSelected }: any) => {
  const activityGroups = useCalendarStore(groupsSelector);
  
  const data = useMemo(
    () =>
      activityGroups
        .filter((it: any) => !it.hidden)
        .sort((a: any, b: any) => a.order - b.order),
    [activityGroups]
  );

  return (
    <>
      {data.map((item: any) => (
        <ActivityGroup
          key={item.id}
          selected={selected}
          setSelected={setSelected}
          group={item}
        />
      ))}
    </>
  );
});
