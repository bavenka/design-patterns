export class Button {
  private static instence: Button;

  private constructor() {}

  paint() {
    console.log("Button is painted");
  }

  static getInstence() {
    if (!Button.instence) {
      Button.instence = new Button();
      return Button.instence;
    }
    return Button.instence;
  }
}
