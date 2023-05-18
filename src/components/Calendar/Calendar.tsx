import { memo, useEffect, useState } from "react";
import { useCalendarStore } from "../../store";
import { setTitleName } from "../../utils/date";
import { weekdays } from "../../constants";
import styles from "./Calendar.module.css";
import { IonIcon, IonImg, IonNavLink } from "@ionic/react";
import { Record } from "../../pages/Record/Record";
import { icons } from "../../constants/daysIcons";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";

const dateSelector = (state: any) => state.date;
const daysSelector = (state: any) => state.daysInMonth;
const decMonth = (state: any) => state.setPrevMonth;
const incMonth = (state: any) => state.setNextMonth;

export const Calendar = memo(() => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <DecMonthBtn />
        <Date />
        <IncMonthBtn />
      </div>
      <Weekdays />
      <Weeks />
    </div>
  );
});

export const Date = memo(() => {
  const date = useCalendarStore(dateSelector);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(setTitleName(date));
  }, [date]);

  return (
    <>
      <span className={styles.title} id="open-date-picker">
        {title}
      </span>
    </>
  );
});

export const DecMonthBtn = memo(() => {
  const dec = useCalendarStore(decMonth);
  return (
    <button onClick={dec} className={styles.button}>
      <IonIcon icon={chevronBackOutline} />
    </button>
  );
});

export const IncMonthBtn = memo(() => {
  const inc = useCalendarStore(incMonth);
  return (
    <button onClick={inc} className={styles.button}>
      <IonIcon icon={chevronForwardOutline} />
    </button>
  );
});

export const Weekdays = memo(() => (
  <div className={styles.weekdays}>
    {weekdays.map((weekday, i) => (
      <span className={styles.weekday} key={i}>
        {weekday}
      </span>
    ))}
  </div>
));

export const Weeks = memo(() => {
  const weeks = useCalendarStore(daysSelector);

  return (
    <div className={styles.daysContainer}>
      {weeks.map((week: any, i: number) =>
        week.map((day: any, i: number) => <Day day={day} key={i} />)
      )}
    </div>
  );
});

export const Day = memo(({ day }: any) => (
  <div className={styles.dayContainer}>
    <DayTitle day={day?.day || day} />
    <DayButton day={day} />
  </div>
));

export const DayTitle = memo(({ day }: any) => {
  return <div className={styles.dayTitle}>{day}</div>;
});

export const DayButton = memo(
  ({
    day,
  }: {
    day: {
      day?: string;
      record?: {
        mood: { iconName: "Happy" | "Good" | "Normal" | "Sad" | "Unhappy" };
      };
    };
  }) => {
    return (
      <div className={styles.buttonContainer}>
        {(day?.day || day) && (
          <IonNavLink
            routerDirection="forward"
            component={() => <Record day={day} />}
          >
            <div className={styles.dayButton}>
              {day?.record && (
                <img
                  src={icons[`${day?.record?.mood?.iconName}`]}
                  className={styles.dayImage}
                  alt=""
                />
              )}
            </div>
          </IonNavLink>
        )}
      </div>
    );
  }
);
