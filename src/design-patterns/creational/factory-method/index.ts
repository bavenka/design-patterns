interface Button {
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

class WinButtonFactory extends ButtonFactory {
  create() {
    return new WinButton();
  }
}

class MacButtonFactory extends ButtonFactory {
  create() {
    return new MacButton();
  }
}

[new WinButtonFactory(), new MacButtonFactory()].forEach(factory =>
  console.log(factory.create().paint())
);
