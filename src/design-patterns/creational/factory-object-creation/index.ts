export function createButton(title: string) {
  return {
    title,
    paint: () => console.log("Button is painted")
  };
}
