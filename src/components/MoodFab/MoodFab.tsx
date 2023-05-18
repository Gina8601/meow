import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { Button } from "../Button/Button";
import styles from "./MoodFab.module.css";
import { useCallback, useRef, useState } from "react";
import { icons } from "../../constants/moodIcons";
import { Record } from "../../pages/Record/Record";
import { moods } from "../../constants";

export const MoodFab = () => {
  const [expanded, setExpanded] = useState(false);
  const el = useRef<HTMLDivElement>(null);

  const push: any = useCallback((mood: any) => {
    el.current?.closest("ion-nav")?.push(() => <Record mood={mood} />);
    setExpanded(false);
  }, []);

  const toggle = useCallback(() => setExpanded((expanded) => !expanded), []);

  return (
    <>
      <Button
        className={[styles.fab, expanded ? styles.expanded : ""].join(" ")}
        onClick={toggle}
      >
        <IonIcon
          aria-hidden="true"
          icon={add}
          className={styles.fabIcon}
        />
      </Button>
      <div className={styles.menu} ref={el}>
        <img src={icons.Happy} alt="" onClick={() => push(moods.happy)} />
        <img src={icons.Good} alt="" onClick={() => push(moods.good)} />
        <img src={icons.Normal} alt="" onClick={() => push(moods.normal)} />
        <img src={icons.Sad} alt="" onClick={() => push(moods.sad)} />
        <img src={icons.Unhappy} alt="" onClick={() => push(moods.unhappy)} />
      </div>
    </>
  );
};
