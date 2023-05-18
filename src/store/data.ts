import { moods } from "../constants";

export const data = [
  {
    year: 2021,
    month: 0,
    days: [
      {
        id: 1,
        day: 2,
        record: {
          mood: moods.good,
          activities: [9, 19, 25],
        },
      },
      {
        id: 2,
        day: 6,
        record: {
          mood: moods.good,
          activities: [4, 8, 29],
        },
      },
    ],
  },
  {
    year: 2021,
    month: 4,
    days: [
      {
        id: 1,
        day: 18,
        record: {
          mood: moods.good,
          activities: [11, 23, 37],
        },
      },
      {
        id: 2,
        day: 25,
        record: {
          mood: moods.good,
          activities: [2, 12, 45],
        },
      },
      {
        id: 3,
        day: 27,
        record: {
          mood: moods.good,
          activities: [6, 14, 32],
        },
      },
    ],
  },
  {
    year: 2022,
    month: 7,
    days: [
      {
        id: 1,
        day: 8,
        record: {
          mood: moods.good,
          activities: [],
        },
      },
      {
        id: 2,
        day: 12,
        record: {
          mood: moods.good,
          activities: [3, 20, 41],
        },
      },
    ],
  },
  {
    year: 2022,
    month: 8,
    days: [
      {
        id: 1,
        day: 4,
        record: {
          mood: moods.good,
          activities: [],
        },
      },
      {
        id: 2,
        day: 19,
        record: {
          mood: moods.good,
          activities: [7, 15, 39],
        },
      },
      {
        id: 3,
        day: 30,
        record: {
          mood: moods.good,
          activities: [],
        },
      },
    ],
  },
  {
    year: 2023,
    month: 3,
    days: [
      {
        id: 1,
        day: 16,
        record: {
          mood: moods.good,
          activities: [5, 18, 34],
        },
      },
      {
        id: 2,
        day: 19,
        record: {
          mood: moods.good,
          activities: [1, 10, 51],
        },
      },
    ],
  },
  {
    year: 2023,
    month: 4,
    days: [
      {
        id: 1,
        day: 24,
        record: {
          mood: moods.happy,
          activities: [],
        },
      },
      {
        id: 2,
        day: 29,
        record: {
          mood: moods.unhappy,
          activities: [17, 28, 52],
        },
      },
      {
        id: 3,
        day: 30,
        record: {
          mood: moods.sad,
          activities: [11, 23, 37],
        },
      },
    ],
  },
];

export const activityGroups = [
  {
    id: 1,
    name: "Совместные занятия",
    order: 0,
    hidden: false,
    activities: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    name: "Эмоции",
    order: 1,
    hidden: false,
    activities: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  },
  {
    id: 3,
    name: "Хобби",
    order: 2,
    hidden: false,
    activities: [21, 22, 23, 24, 25, 26, 27, 28],
  },
  {
    id: 4,
    name: "Погода",
    order: 3,
    hidden: true,
    activities: [29, 30, 31, 32, 33],
  },
  {
    id: 5,
    name: "Еда",
    order: 4,
    hidden: true,
    activities: [34, 35, 36, 37, 38],
  },
  {
    id: 6,
    name: "Домашние дела",
    order: 5,
    hidden: true,
    activities: [39, 40, 41, 42, 43],
  },
  {
    id: 7,
    name: "Уход за собой ",
    order: 6,
    hidden: true,
    activities: [44, 45, 46, 47, 48],
  },
  {
    id: 8,
    name: "События",
    order: 7,
    hidden: true,
    activities: [49, 50, 51, 52, 53],
  },
];

export const activities = [
  { id: 1, name: "семья", iconName: "family" },
  { id: 2, name: "друзья", iconName: "friends" },
  { id: 3, name: "возлюбленный", iconName: "beloved" },
  { id: 4, name: "незнакомец", iconName: "stranger" },
  { id: 5, name: "никто", iconName: "noone" },
  { id: 6, name: "взволнованный", iconName: "excited" },
  { id: 7, name: "расслабленный", iconName: "relaxed" },
  { id: 8, name: "гордый", iconName: "proud" },
  { id: 9, name: "надеющийся", iconName: "hopeful" },
  { id: 10, name: "счастливый", iconName: "happy" },
  { id: 11, name: "восторженный", iconName: "enthusiastic" },
  { id: 12, name: "окрыленный", iconName: "butterflies" },
  { id: 13, name: "обновленный", iconName: "refreshed" },
  { id: 14, name: "мрачный", iconName: "gloomy" },
  { id: 15, name: "одинокий", iconName: "lonely" },
  { id: 16, name: "тревожный", iconName: "anxious" },
  { id: 17, name: "грустный", iconName: "sad" },
  { id: 18, name: "сердитый", iconName: "angry" },
  { id: 19, name: "усталый", iconName: "tired" },
  { id: 20, name: "раздражённый", iconName: "annoyed" },
  { id: 21, name: "кино и тв", iconName: "moviesAndTv" },
  { id: 22, name: "чтение", iconName: "reading" },
  { id: 23, name: "игры", iconName: "gaming" },
  { id: 24, name: "спорт", iconName: "exercise" },
  { id: 25, name: "прогулка", iconName: "takingAWalk" },
  { id: 26, name: "рисование", iconName: "painting" },
  { id: 27, name: "игра на инструменте", iconName: "instrumentPlaying" },
  { id: 28, name: "рукоделие", iconName: "crafts" },
  { id: 29, name: "солнечно", iconName: "sunny" },
  { id: 30, name: "дождь", iconName: "rainy" },
  { id: 31, name: "облачно", iconName: "cloudy" },
  { id: 32, name: "снег", iconName: "snowy" },
  { id: 33, name: "ветренно", iconName: "windy" },
  { id: 34, name: "здоровая еда", iconName: "healthyFood" },
  { id: 35, name: "вредная пища", iconName: "junkFood" },
  { id: 36, name: "домашняя", iconName: "homeCooked" },
  { id: 37, name: "ресторан", iconName: "restaurant" },
  { id: 38, name: "доставка", iconName: "delivery" },
  { id: 39, name: "уборка", iconName: "cleaning" },
  { id: 40, name: "прачечная", iconName: "laundry" },
  { id: 41, name: "приготовление пищи", iconName: "cooking" },
  { id: 42, name: "уход за растениями", iconName: "plantCare" },
  { id: 43, name: "покупка продуктов", iconName: "groceryShopping" },
  { id: 44, name: "стрижка", iconName: "haircut" },
  { id: 45, name: "маникюр", iconName: "manicure" },
  { id: 46, name: "уход за кожей", iconName: "skincare" },
  { id: 47, name: "макияж", iconName: "makeup" },
  { id: 48, name: "массаж", iconName: "massage" },
  { id: 49, name: "кинотеатр", iconName: "cinema" },
  { id: 50, name: "парк аттракционов", iconName: "amusementPark" },
  { id: 51, name: "шопинг", iconName: "shopping" },
  { id: 52, name: "пикник", iconName: "picnic" },
  { id: 53, name: "поездка", iconName: "travel" },
];
