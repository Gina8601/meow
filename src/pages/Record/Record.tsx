import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { App } from "@capacitor/app";
import { MoodGroup } from "../../components/MoodGroup/MoodGroup";
import styles from "./Record.module.css";
import { ActivityGroups } from "../../components/ActivityGroups/ActivityGroups";
import { Button } from "../../components/Button/Button";
import { useCalendarStore } from "../../store";
import { closeOutline } from "ionicons/icons";
import settings from "../../pics/tabs/settings.svg";
import { Activities } from "../Activities/Activities";

const setActivitySelector = (state: any) => state.setActivity;
const weeksSelector = (state: any) => state.daysInMonth;

export const Record = ({ day = new Date().getDate(), mood }: any) => {
  const weeks = useCalendarStore(weeksSelector);
  const [selectedMood, setSelectedMood] = useState(day?.record?.mood || mood);
  const [selectedActivities, setSelectedActivities] = useState(
    day?.record?.activities
  );

  useLayoutEffect(() => {
    for (let i = 0; i < weeks.length; i++) {
      for (let j = 0; j < weeks[i].length; j++) {
        if (weeks[i][j] === day || weeks[i][j]?.day === day) {
          const activities = weeks[i][j]?.record?.activities;
          setSelectedActivities(activities);
          return;
        }
      }
    }
  }, []);

  const setActivity = useCalendarStore(setActivitySelector);

  const el = useRef<HTMLIonContentElement>(null);

  const goBack: any = useCallback(() => {
    el.current?.closest("ion-nav")?.pop();
  }, []);

  const goToActivities: any = useCallback(() => {
    el.current?.closest("ion-nav")?.push(() => <Activities />);
  }, []);

  const handleSave = () => {
    if (!selectedMood) return;

    setActivity({
      day: day?.day || day,
      record: {
        mood: selectedMood,
        activities: selectedActivities,
      },
    });

    goBack();
  };

  useEffect(() => {
    App.removeAllListeners();
    App.addListener("backButton", goBack);

    return () => {
      App.removeAllListeners();
      App.addListener("backButton", () => {});
    };
  }, [goBack]);

  return (
    <>
      <IonHeader>
        <IonToolbar className={styles.header}>
          <IonButtons slot="start">
            <Button className={styles.editButton} onClick={goToActivities}>
              <IonIcon icon={settings} />
            </Button>
          </IonButtons>
          <IonButtons slot="end">
            <Button className={styles.backButton} onClick={goBack}>
              <IonIcon icon={closeOutline} />
            </Button>
          </IonButtons>
          <IonTitle className={styles.headerTitle}>Запись</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen ref={el}>
        <div className={styles.content}>
          <div className={styles.groupsContainer}>
            <MoodGroup selected={selectedMood} setSelected={setSelectedMood} />
            <ActivityGroups
              selected={selectedActivities}
              setSelected={setSelectedActivities}
            />
          </div>
          <Button className={styles.submitButton} onClick={handleSave}>
            Готово
          </Button>
        </div>
      </IonContent>
    </>
  );
};
