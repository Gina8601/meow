import styles from "./MoodGroup.module.css";
import { MoodItem } from "../MoodItem/MoodItem";
import { memo, useCallback } from "react";
import { moodList } from "../../constants/moods";
import { icons } from "../../constants/moodIcons";

export const MoodGroup = memo(({ selected, setSelected }: any) => {
  const selectMood = useCallback((mood: any) => () => setSelected(mood), []);

  return (
    <div className={styles.container}>
      <Title />
      <div className={styles.moodsContainer}>
        {moodList.map(({ mood, id }) => (
          <MoodItem
            selected={selected?.name === mood.name}
            onClick={selectMood(mood)}
            key={id}
          >
            <img src={icons[mood.iconName]} alt="" className={styles.moodImage} />
          </MoodItem>
        ))}
      </div>
    </div>
  );
});

const Title = memo(() => (
  <div className={styles.textContainer}>
    <div className={styles.title}>Как прошел Ваш день?</div>
  </div>
));
