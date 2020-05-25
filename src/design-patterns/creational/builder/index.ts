class Button {
  title: string;
  heigth: number;
  width: number;
  constructor() {
    this.title = "Click on me";
    this.heigth = 4;
    this.width = 5;
  }
}

interface Builder {
  setTitle(title: string): Builder;
  setWidth(width: number): Builder;
  setHeigth(heigth: number): Builder;
  getResult(): Button;
}

export class ButtonBuilder implements Builder {
  private readonly button: Button;
  constructor() {
    this.button = new Button();
  }

  setTitle(title: string) {
    this.button.title = title;
    return this;
  }

  setHeigth(heigth: number) {
    this.button.heigth = heigth;
    return this;
  }

  getResult() {
    return this.button;
  }

  setWidth(width: number) {
    this.button.width = width;
    return this;
  }
}
