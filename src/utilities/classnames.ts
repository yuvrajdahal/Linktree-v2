export default function classNames(
  ...classNames: (string | undefined)[]
): string {
  return classNames.filter(Boolean).join(" ");
}
