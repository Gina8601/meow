import { memo } from "react";
import { GroupActivities } from "./GroupActivities";
import { Toolbar } from "./Toolbar";

export const Group = memo(
  ({
    groupActivities,
    showEdit,
    showAddItem,
    isHidden,
    switchVisibility,
    deleteGroup,
    showEditItem
  }: any) => (
    <>
      <GroupActivities
        groupActivities={groupActivities}
        showAddItem={showAddItem}
        showEditItem={showEditItem}
      />
      <Toolbar
        showEdit={showEdit}
        switchVisibility={switchVisibility}
        deleteGroup={deleteGroup}
        isHidden={isHidden}
      />
    </>
  )
);