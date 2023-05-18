import { getDaysInMonth } from ".";

export const findMonthWithActivities = (activities, date) => {
  const daysInMonth = getDaysInMonth(date);

  const year = date.getFullYear();
  const month = date.getMonth();

  const foundMonth =
    activities.find((it) => it.year === year && it.month === month)?.days ||
    [];

  const result = daysInMonth.map((week) =>
    week.map((day) => foundMonth.find((it) => it.day === Number(day)) || day)
  );

  return result;
};
