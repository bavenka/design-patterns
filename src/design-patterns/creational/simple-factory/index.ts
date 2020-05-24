export enum ELEMENT_TYPE {
  Button,
  Checkbox
}

abstract class UIElement {
  height: string;
  width: string;
  constructor(height: string, width: string) {
    this.height = height;
    this.width = width;
  }
}

class Button extends UIElement {}

class Checkbox extends UIElement {}

export abstract class GUIFactory {
  static create(type: ELEMENT_TYPE, props: { height: string; width: string }) {
    switch (type) {
      case ELEMENT_TYPE.Button:
        return new Button(props.height, props.width);
      case ELEMENT_TYPE.Checkbox:
        return new Checkbox(props.height, props.width);
      default:
        return null;
    }
  }
}
