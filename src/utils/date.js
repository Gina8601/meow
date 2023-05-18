import { months } from "../constants";

export const getDaysInMonth = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  let firstDay = new Date(year, month, 1).getDay();
  firstDay = firstDay === 0 ? 7 : firstDay;

  const daysInMonth = new Date(year, month + 1, 0).getDate(); //last day of month

  const days = [];
  let day = 1;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay - 1) || day > daysInMonth) {
        week.push("");
        continue;
      }

      week.push(day++);
    }

    days.push(week);
  }

  return days;
};

export const getMonthName = (date) => {
  const options = { month: "long" };
  const monthName = date.toLocaleDateString("ru-RU", options);
  return monthName[0].toUpperCase() + monthName.slice(1);
};

export const setTitleName = (date) => {
  const monthName = getMonthName(date);
  const monthAbbreviation = months.find(
    (month) => month.name === monthName
  ).abbr;

  const newTitle = monthAbbreviation + ` ${date.getFullYear()}`;

  return newTitle;
};
