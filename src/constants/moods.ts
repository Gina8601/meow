interface Mood {
  name: string;
  iconName: "Happy" | "Good" | "Normal" | "Sad" | "Unhappy";
}

interface MoodEnumeration {
  [key: string]: Mood;
}

export const moods: MoodEnumeration = {
  happy: {
    name: "happy",
    iconName: "Happy",
  },
  good: {
    name: "good",
    iconName: "Good",
  },
  normal: {
    name: "normal",
    iconName: "Normal",
  },
  sad: {
    name: "sad",
    iconName: "Sad",
  },
  unhappy: {
    name: "unhappy",
    iconName: "Unhappy",
  },
};

export const moodList = [
  {
    id: 1,
    mood: moods.happy,
  },
  {
    id: 2,
    mood: moods.good,
  },
  {
    id: 3,
    mood: moods.normal,
  },
  {
    id: 4,
    mood: moods.sad,
  },
  {
    id: 5,
    mood: moods.unhappy,
  },
];
