import styles from "./EditActivityGroup.module.css";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { Group } from "./Group";
import { Title } from "./Title";
import { EditModal } from "./EditModal";
import { AddItemModal } from "./AddItemModal";
import { EditItemModal } from "./EditItemModal";

export const EditActivityGroup = memo(
  ({
    group,
    localGroups,
    setLocalGroups,
    localActivities,
    setLocalActivities,
  }: any) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddItemModal, setShowAddItemModal] = useState(false);
    const [showEditItemModal, setShowEditItemModal] = useState(false);

    const [editItemId, setEditItemId] = useState();
    const [editItemName, setEditItemName] = useState();

    const editModal = useRef<HTMLIonModalElement>(null);
    const addItemModal = useRef<HTMLIonModalElement>(null);
    const editItemModal = useRef<HTMLIonModalElement>(null);

    const groupActivities = useMemo(
      () =>
        group.activities.map((id: number) =>
          localActivities.find((it: any) => it.id === id)
        ),
      [group, localActivities]
    );

    const setGroupName = useCallback(
      (id: number, name: string) => {
        const newGroups = localGroups.map((group: any) =>
          group.id === id ? { ...group, name } : group
        );

        return setLocalGroups(newGroups);
      },
      [localGroups]
    );

    const setItemName = useCallback(
      (id: number, name: string) => {
        const newActivities = localActivities.map((activity: any) =>
          activity.id === id ? { ...activity, name } : activity
        );

        setEditItemName(null as any);
        setEditItemId(null as any);
        
        return setLocalActivities(newActivities);
      },
      [localActivities]
    );

    const setGroupVisibility = useCallback(
      (id: number, hidden: boolean) => {
        const newGroups = localGroups.map((group: any) =>
          group.id === id ? { ...group, hidden } : group
        );

        return setLocalGroups(newGroups);
      },
      [localGroups]
    );

    const addNewItem = useCallback(
      (id: number, name: string) => {
        const newActivity = {
          id: Date.now(),
          name,
          iconName: `icon-${name}`,
        };

        setLocalActivities([...localActivities, newActivity]);

        const newGroups = localGroups.map((group: any) =>
          group.id === id
            ? { ...group, activities: [...group.activities, newActivity.id] }
            : group
        );

        return setLocalGroups(newGroups);
      },
      [localGroups]
    );

    const closeEditModal = useCallback(() => {
      editModal.current?.dismiss();
    }, []);

    const closeAddItemModal = useCallback(() => {
      addItemModal.current?.dismiss();
    }, []);

    const closeEditItemModal = useCallback(() => {
      setEditItemName(null as any);
      setEditItemId(null as any);
      editItemModal.current?.dismiss();
    }, []);

    const submitEditModal = useCallback(
      (newGroupName: string) => {
        setGroupName(group.id, newGroupName);
        editModal.current?.dismiss();
      },
      [setGroupName, group]
    );

    const submitAddItemModal = useCallback(
      (newItemName: string) => {
        addNewItem(group.id, newItemName);
        addItemModal.current?.dismiss();
      },
      [addNewItem, group]
    );

    const submitEditItemModal = useCallback(
      (newItemName: string) => {
        setItemName(editItemId as any, newItemName);
        editItemModal.current?.dismiss();
      },
      [setItemName, editItemId]
    );

    const handleEditDismiss = useCallback(() => {
      setShowEditModal(false);
    }, []);

    const handleAddItemDismiss = useCallback(() => {
      setShowAddItemModal(false);
    }, []);

    const handleEditItemDismiss = useCallback(() => {
      setEditItemName(null as any);
      setEditItemId(null as any);
      setShowEditItemModal(false);
    }, []);

    const showEdit = useCallback(() => setShowEditModal((state) => !state), []);

    const showAddItem = useCallback(
      () => setShowAddItemModal((state) => !state),
      []
    );

    const showEditItem = useCallback((id: number, name: string) => {
      setEditItemName(name as any);
      setEditItemId(id as any);
      setShowEditItemModal((state) => !state);
    }, []);

    const switchVisibility = useCallback(
      () => setGroupVisibility(group.id, !group.hidden),
      [group, setGroupVisibility]
    );

    const deleteGroup = useCallback(
      () =>
        setLocalGroups((state: any) =>
          state.filter((it: any) => it.id !== group.id)
        ),
      [group, localGroups]
    );

    return (
      <div className={styles.container}>
        <Title text={group.name} />
        <Group
          groupActivities={groupActivities}
          showEdit={showEdit}
          showAddItem={showAddItem}
          showEditItem={showEditItem}
          isHidden={group.hidden}
          switchVisibility={switchVisibility}
          deleteGroup={deleteGroup}
        />
        <EditModal
          visible={showEditModal}
          el={editModal}
          isOpen={showEditModal}
          onDidDismiss={handleEditDismiss}
          closeModal={closeEditModal}
          submitModal={submitEditModal}
          currentName={group.name}
        />
        <AddItemModal
          visible={showAddItemModal}
          el={addItemModal}
          isOpen={showAddItemModal}
          onDidDismiss={handleAddItemDismiss}
          closeModal={closeAddItemModal}
          submitModal={submitAddItemModal}
        />
        <EditItemModal
          visible={showEditItemModal}
          el={editItemModal}
          isOpen={showEditItemModal}
          onDidDismiss={handleEditItemDismiss}
          closeModal={closeEditItemModal}
          submitModal={submitEditItemModal}
          currentName={editItemName}
        />
      </div>
    );
  }
);
