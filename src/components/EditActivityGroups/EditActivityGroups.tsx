import { memo, useCallback, useRef, useState } from "react";
import { EditActivityGroup } from "../EditActivityGroup/EditActivityGroup";
import { AddGroupModal } from "../EditActivityGroup/AddGroupModal";
import styles from "./EditActivityGroups.module.css";
import { ActivityItem } from "../ActivityItem/ActivityItem";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

export const EditActivityGroups = memo(
  ({
    localGroups,
    setLocalGroups,
    localActivities,
    setLocalActivities,
  }: any) => {
    const [showAddGroupModal, setShowAddGroupModal] = useState(false);

    const addGroupModal = useRef<HTMLIonModalElement>(null);

    const closeAddGroupModal = useCallback(() => {
      addGroupModal.current?.dismiss();
    }, []);

    const addGroup = useCallback(
      (name: string) => {
        const newGroup = {
          id: Date.now(),
          name,
          order: localGroups.length,
          hidden: false,
          activities: [],
        };

        return setLocalGroups([...localGroups, newGroup]);
      },
      [localGroups]
    );

    const submitAddGroupModal = useCallback(
      (newGroupName: string) => {
        addGroup(newGroupName);
        addGroupModal.current?.dismiss();
      },
      [addGroup]
    );

    const handleAddGroupDismiss = useCallback(() => {
      setShowAddGroupModal(false);
    }, []);

    const showAddGroup = useCallback(
      () => setShowAddGroupModal((state: any) => !state),
      []
    );

    return (
      <>
        {localGroups.map((group: any) => (
          <EditActivityGroup
            key={group.id}
            group={group}
            localGroups={localGroups}
            setLocalGroups={setLocalGroups}
            setLocalActivities={setLocalActivities}
            localActivities={localActivities}
          />
        ))}
        <AddGroupModal
          visible={showAddGroupModal}
          el={addGroupModal}
          isOpen={showAddGroupModal}
          onDidDismiss={handleAddGroupDismiss}
          closeModal={closeAddGroupModal}
          submitModal={submitAddGroupModal}
        />
        <div className={styles.addGroupContainer} onClick={showAddGroup}>
          <ActivityItem selected>
            <IonIcon icon={add} className={styles.icon} />
          </ActivityItem>
          <span className={styles.addGroupText}>Создать новую группу</span>
        </div>
      </>
    );
  }
);
