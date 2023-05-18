import styles from "./MoodItem.module.css";

export const MoodItem = ({ selected, children, onClick }: any) => {
  return (
    <div
      className={[styles.mood, selected ? styles.selected : ""].join(" ")}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
