abstract class Button {
  title: string;
  constructor(title: string) {
    this.title = title;
  }

  abstract clone(): Button;
}

export class LoadingButton extends Button {
  indicator: number;

  constructor(title: string, indicator: number) {
    super(title);
    this.indicator = indicator;
  }

  clone() {
    return new LoadingButton(this.title, this.indicator);
  }
}

export class RoundedButton extends Button {
  radius: number;

  constructor(title: string, radius: number) {
    super(title);
    this.radius = radius;
  }

  clone() {
    return new RoundedButton(this.title, this.radius);
  }
}
