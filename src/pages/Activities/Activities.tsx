import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Activities.module.css";
import { closeOutline } from "ionicons/icons";
import { Button } from "../../components/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonSegmentCustomEvent, SegmentChangeEventDetail } from "@ionic/core";
import "swiper/css";
import { Swiper as SwiperType } from "swiper/types";
import { EditActivities } from "../EditActivities/EditActivities";
import { useCalendarStore } from "../../store";

const screenNames = {
  edit: "0",
  order: "1",
};

const setActivityGroupsSelector = (state: any) => state.setActivityGroups;
const setActivitiesSelector = (state: any) => state.setActivities;

const groupsSelector = (state: any) => state.activityGroups;
const activitiesSelector = (state: any) => state.activities;

export const Activities = memo(() => {
  const [selectedScreen, setSelectedScreen] = useState(screenNames.edit);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const el = useRef<HTMLIonContentElement>(null);

  const goBack: any = useCallback(() => {
    el.current?.closest("ion-nav")?.pop();
  }, []);

  const handleSegmentChange = useCallback(
    (e: IonSegmentCustomEvent<SegmentChangeEventDetail>) => {
      setSelectedScreen(e.detail.value || "0");
    },
    []
  );

  const slideTo = useCallback(
    (index: number) => swiper?.slideTo(index, 250),
    [swiper]
  );

  const onSlideChange = useCallback(
    (e: SwiperType) => setSelectedScreen(e?.activeIndex.toString()),
    []
  );

  useEffect(() => {
    slideTo(Number(selectedScreen));
  }, [selectedScreen, slideTo]);

  return (
    <>
      <Header
        goBack={goBack}
        selectedScreen={selectedScreen}
        handleSegmentChange={handleSegmentChange}
      />
      <ActivitiesContent
        goBack={goBack}
        el={el}
        setSwiper={setSwiper}
        onSlideChange={onSlideChange}
      />
    </>
  );
});

const Header = memo(({ goBack, selectedScreen, handleSegmentChange }: any) => (
  <IonHeader>
    <IonToolbar className={styles.header}>
      <IonButtons slot="start">
        <div className={styles.space} />
      </IonButtons>
      <IonButtons slot="end">
        <Button className={styles.backButton} onClick={goBack}>
          <IonIcon icon={closeOutline} />
        </Button>
      </IonButtons>
      <IonTitle className={styles.headerTitle}>Редактирование</IonTitle>
    </IonToolbar>
    <IonToolbar mode="ios" className={styles.segmentsToolbar}>
      <IonSegment
        value={selectedScreen}
        mode="ios"
        onIonChange={handleSegmentChange}
      >
        <IonSegmentButton
          value={screenNames.edit}
          mode="ios"
          className={styles.segmentButton}
        >
          <IonLabel mode="ios">Группы</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton
          value={screenNames.order}
          mode="ios"
          className={styles.segmentButton}
        >
          <IonLabel mode="ios">Порядок</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonToolbar>
  </IonHeader>
));

const ActivitiesContent = memo(
  ({ goBack, el, setSwiper, onSlideChange }: any) => {
    const setActivityGroups = useCalendarStore(setActivityGroupsSelector);
    const setActivities = useCalendarStore(setActivitiesSelector);

    const activityGroups = useCalendarStore(groupsSelector);
    const activities = useCalendarStore(activitiesSelector);

    const [localGroups, setLocalGroups] = useState(activityGroups);
    const [localActivities, setLocalActivities] = useState(activities);

    const sortedGroups = useMemo(() => {
      return localGroups.sort(
        (a: any, b: any) => Number(a.hidden) - Number(b.hidden)
      );
    }, [localGroups]);

    const onSave = useCallback(() => {
      setActivityGroups(localGroups);
      setActivities(localActivities);
      goBack();
    }, [localGroups, localActivities]);

    return (
      <IonContent fullscreen ref={el}>
        <div className={styles.content}>
          <Swiper
            className={styles.swiper}
            onSwiper={setSwiper}
            onSlideChange={onSlideChange}
            resistanceRatio={0.65}
          >
            <SwiperSlide>
              <EditActivities
                localGroups={sortedGroups}
                setLocalGroups={setLocalGroups}
                setLocalActivities={setLocalActivities}
                localActivities={localActivities}
              />
            </SwiperSlide>
            <SwiperSlide>
              Rearrange order by holding and dragging here
            </SwiperSlide>
          </Swiper>
          <Button className={styles.submitButton} onClick={onSave}>
            Готово
          </Button>
        </div>
      </IonContent>
    );
  }
);
