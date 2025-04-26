export const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (month, year) => {
  const firstDay = new Date(year, month, 1).getDay();
  return firstDay === 0 ? 6 : firstDay - 1;
};
