import { IonContent, IonPage } from "@ionic/react";
import { Calendar as CalendarView } from "../../components/Calendar/Calendar";
import styles from "./Calendar.module.css";

export const Calendar = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.container}>
          <CalendarView />
        </div>
      </IonContent>
    </IonPage>
  );
};
