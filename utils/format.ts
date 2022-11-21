const DATE_FORMATTER = new Intl.DateTimeFormat(undefined, {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  weekday: 'long',
});

export function formatDate(dateRaw: string): string {
  const date = new Date(dateRaw);
  return DATE_FORMATTER.format(date);
}
