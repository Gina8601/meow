export const activityGroups = [
  {
    id: 1,
    name: "Совместные занятия",
    order: 0,
    hidden: false,
    activities: [
      { name: "семья", iconName: "family" }, // можно добавить GroupName если будет надо!!!!!!!!!!!!!!!!!!!!!!!!!!!
      { name: "друзья", iconName: "friends" },
      { name: "возлюбленный", iconName: "beloved" },
      { name: "незнакомец", iconName: "stranger" },
      { name: "никто", iconName: "noone" },
    ],
  },
  {
    id: 2,
    name: "Эмоции",
    order: 1,
    hidden: false,
    activities: [
      { name: "взволнованный", iconName: "excited" },
      { name: "расслабленный", iconName: "relaxed" },
      { name: "гордый", iconName: "proud" },
      { name: "надеющийся", iconName: "hopeful" },
      { name: "счастливый", iconName: "happy" },
      { name: "восторженный", iconName: "enthusiastic" },
      { name: "окрыленный", iconName: "butterflies" },
      { name: "обновленный", iconName: "refreshed" },
      { name: "мрачный", iconName: "gloomy" },
      { name: "одинокий", iconName: "lonely" },
      { name: "тревожный", iconName: "anxious" },
      { name: "грустный", iconName: "sad" },
      { name: "сердитый", iconName: "angry" },
      { name: "усталый", iconName: "tired" },
      { name: "раздражённый", iconName: "annoyed" },
    ],
  },
  {
    id: 3,
    name: "Хобби",
    order: 2,
    hidden: false,
    activities: [
      { name: "кино и тв", iconName: "moviesAndTv" },
      { name: "чтение", iconName: "reading" },
      { name: "игры", iconName: "gaming" },
      { name: "спорт", iconName: "exercise" },
      { name: "прогулка", iconName: "takingAWalk" },
      { name: "рисование", iconName: "painting" },
      { name: "игра на инструменте", iconName: "instrumentPlaying" },
      { name: "рукоделие", iconName: "crafts" },
    ],
  },
  {
    id: 4,
    name: "Погода",
    order: 3,
    hidden: true,
    activities: [
      { name: "солнечно", iconName: "sunny" }, 
      { name: "дождь", iconName: "rainy" },
      { name: "облачно", iconName: "cloudy" },
      { name: "снег", iconName: "snowy" },
      { name: "ветренно", iconName: "windy" },
    ],
  },
  {
    id: 5,
    name: "Еда",
    order: 4,
    hidden: true,
    activities: [
      { name: "здоровая еда", iconName: "healthyFood" }, 
      { name: "вредная пища", iconName: "junkFood" },
      { name: "домашняя", iconName: "homeCooked" },
      { name: "ресторан", iconName: "restaurant" },
      { name: "доставка", iconName: "delivery" },
    ],
  },
  {
    id: 6,
    name: "Домашние дела",
    order: 5,
    hidden: true,
    activities: [
      { name: "уборка", iconName: "cleaning" }, 
      { name: "прачечная", iconName: "laundry" },
      { name: "приготовление пищи", iconName: "cooking" },
      { name: "уход за растениями", iconName: "plantCare" },
      { name: "покупка продуктов", iconName: "groceryShopping" },
    ],
  },
  {
    id: 7,
    name: "Уход за собой ",
    order: 6,
    hidden: true,
    activities: [
      { name: "стрижка", iconName: "haircut" }, 
      { name: "маникюр", iconName: "manicure" },
      { name: "уход за кожей", iconName: "skincare" },
      { name: "макияж", iconName: "makeup" },
      { name: "массаж", iconName: "massage" },
    ],
  },
  {
    id: 8,
    name: "События",
    order: 7,
    hidden: true,
    activities: [
      { name: "кинотеатр", iconName: "cinema" }, 
      { name: "парк аттракционов", iconName: "amusementPark" },
      { name: "шопинг", iconName: "shopping" },
      { name: "пикник", iconName: "picnic" },
      { name: "поездка", iconName: "travel" },
    ],
  },
];