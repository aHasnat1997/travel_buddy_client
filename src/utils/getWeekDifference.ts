/**
 * convert two date difference in week 
 * @param date1 Starting date
 * @param date2 End date
 * @returns Difference in week
 */
export function getWeekDifference(date1: string, date2: string): number {
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;

  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const differenceInMilliseconds = Math.abs(d1.getTime() - d2.getTime());
  const differenceInWeeks = Math.ceil(differenceInMilliseconds / millisecondsPerWeek);

  return differenceInWeeks;
};