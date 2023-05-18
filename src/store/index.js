import { create } from "zustand";
import { activities, activityGroups, data } from "./data";
import { findMonthWithActivities } from "../utils/activities";

const initialDate = new Date();

export const useCalendarStore = create((set, get) => ({
  loggedIn: false,
  date: initialDate,
  daysInMonth: findMonthWithActivities(data, initialDate),
  data,
  activityGroups,
  activities,
  selectedDay: null,
  setLoggedIn: (loggedIn) => set({ loggedIn }),
  setNextMonth: () =>
    set((state) => {
      const { date } = state;
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() + 1);
      return {
        date: newDate,
        daysInMonth: findMonthWithActivities(get().data, newDate),
        selectedDay: null,
      };
    }),
  setPrevMonth: () =>
    set((state) => {
      const { date } = state;
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() - 1);
      return {
        date: newDate,
        daysInMonth: findMonthWithActivities(get().data, newDate),
        selectedDay: null,
      };
    }),
  setActivity: (payload) =>
    set(() => {
      const { record, day } = payload;
      const { data, date } = get();

      const year = date.getFullYear();
      const month = date.getMonth();

      const newActivity = {
        id: date.getTime(),
        day,
        record: {
          mood: record.mood,
          activities: record.activities,
        },
      };

      const foundMonth = data.find(
        (it) => it.year === year && it.month === month
      );

      if (!foundMonth) {
        const newMonth = {
          year,
          month,
          days: [newActivity],
        };

        const newActivities = data.concat(newMonth);

        return {
          data: newActivities,
          daysInMonth: findMonthWithActivities(newActivities, date),
          selectedDay: null,
        };
      }

      const foundDate = foundMonth.days.find((it) => it.day === day);

      if (!foundDate) {
        const newActivities = data.map((it) =>
          it.year === year && it.month === month
            ? {
                ...it,
                days: [...it.days, newActivity],
              }
            : it
        );

        return {
          data: newActivities,
          daysInMonth: findMonthWithActivities(newActivities, date),
          selectedDay: null,
        };
      }

      const newActivities = data.map((it) =>
        it.year === year && it.month === month
          ? {
              ...it,
              days: it.days.map((cur) => (cur.day === day ? newActivity : cur)),
            }
          : it
      );

      return {
        data: newActivities,
        daysInMonth: findMonthWithActivities(newActivities, date),
        selectedDay: null,
      };
    }),
  setSelectedDay: (day) => set({ selectedDay: day }),
  setActivityGroups: (newGroups) =>
    set(() => {
      return { activityGroups: newGroups };
    }),
  setActivities: (newActivities) =>
    set(() => {
      return { activities: newActivities };
    }),
}));
