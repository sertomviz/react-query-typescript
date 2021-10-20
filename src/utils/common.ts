import { format, isValid } from 'date-fns';

export const times = (n: number): number[] => Array.from(Array(n).keys());

export const buildQuery = (page: number, category: string, dateFrom: Date | null, dateTo: Date | null): string => {
  const p = `page=${page}`;
  const c = category ? `section=${category}` : null;
  const df = dateFrom && isValid(dateFrom) ? `from-date=${format(dateFrom, 'yyyy-MM-dd')}` : null;
  const dt = dateTo && isValid(dateTo) ? `to-date=${format(dateTo, 'yyyy-MM-dd')}` : null;
  return [p, c, df, dt].filter(e => e).join('&');
};
