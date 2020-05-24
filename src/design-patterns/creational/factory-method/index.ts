export interface Button {
  paint(): void;
}

class WinButton implements Button {
  paint() {
    console.log("A win button is painted");
  }
}

class MacButton implements Button {
  paint() {
    console.log("A mac button is painted");
  }
}

abstract class ButtonFactory {
  abstract create(): Button;
}

export class WinButtonFactory extends ButtonFactory {
  create() {
    return new WinButton();
  }
}

export class MacButtonFactory extends ButtonFactory {
  create() {
    return new MacButton();
  }
}
