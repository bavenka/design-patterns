enum ELEMENT_TYPE {
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

class GUIFactory {
  create(type: ELEMENT_TYPE, props: { height: string; width: string }) {
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

const factory = new GUIFactory();
const button = factory.create(ELEMENT_TYPE.Button, {
  height: "25px",
  width: "40px"
});
console.log(button.width);
