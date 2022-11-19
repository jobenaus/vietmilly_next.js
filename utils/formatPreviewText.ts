export function truncateText(
  text: string,
  max: number,
  suffix: string
): string {
  return text.length < max
    ? text
    : `${text.substr(
        0,
        text.substr(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`;
}
