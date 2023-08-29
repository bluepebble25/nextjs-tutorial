export function decodeTitle(title: string): string {
  return decodeURIComponent(title.replace(/\+/g, ' '));
}
