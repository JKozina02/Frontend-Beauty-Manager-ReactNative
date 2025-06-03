export const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (month, year) => {
  const firstDay = new Date(year, month, 1).getDay();
  return firstDay === 0 ? 6 : firstDay - 1;
};

export const formatDate = (date) => {
  if (!date) return null;

  if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) return date;

  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
};
