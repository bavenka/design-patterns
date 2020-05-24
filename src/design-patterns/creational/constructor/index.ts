enum COLOR {
  Black,
  White
}

class Button {
  title;
  color;
  constructor(title: string, color: COLOR) {
    this.title = title;
    this.color = color;
  }
}

const button = new Button("Click on me", COLOR.White);
export { button };
