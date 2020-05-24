import { Button, WinButtonFactory, MacButtonFactory } from "../factory-method";

interface Checkbox {
  paint(): void;
}

class WinCheckbox implements Checkbox {
  paint() {
    console.log("A win checkbox is painted");
  }
}

class MacCheckbox implements Checkbox {
  paint() {
    console.log("A mac checkbox is painted");
  }
}

abstract class CheckboxFactory {
  abstract create(): Checkbox;
}

class WinCheckboxFactory extends CheckboxFactory {
  create() {
    return new WinCheckbox();
  }
}

class MacCheckboxFactory extends CheckboxFactory {
  create() {
    return new MacCheckbox();
  }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

export class MacFactory implements GUIFactory {
  createButton() {
    return new MacButtonFactory().create();
  }
  createCheckbox() {
    return new MacCheckboxFactory().create();
  }
}

export class WinFactory implements GUIFactory {
  createButton() {
    return new WinButtonFactory().create();
  }
  createCheckbox() {
    return new WinCheckboxFactory().create();
  }
}
