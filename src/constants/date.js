export const months = [
  { name: "Январь", abbr: "Янв." },
  { name: "Февраль", abbr: "Февр." },
  { name: "Март", abbr: "Март" },
  { name: "Апрель", abbr: "Апр." },
  { name: "Май", abbr: "Май" },
  { name: "Июнь", abbr: "Июнь" },
  { name: "Июль", abbr: "Июль" },
  { name: "Август", abbr: "Авг." },
  { name: "Сентябрь", abbr: "Сент." },
  { name: "Октябрь", abbr: "Окт." },
  { name: "Ноябрь", abbr: "Нояб." },
  { name: "Декабрь", abbr: "Дек." },
];

export const years = Array(200)
  .fill(0)
  .map((_, i) => `${1900 + i}`);

export const weekdays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
