import { WinFactory } from "./design-patterns/creational/abstract-factory";
import {
  GUIFactory,
  ELEMENT_TYPE
} from "./design-patterns/creational/simple-factory";

import { createButton } from "./design-patterns/creational/factory-object-creation";

import { Button as Singleton } from "./design-patterns/creational/singleton";

import {
  LoadingButton,
  RoundedButton
} from "./design-patterns/creational/prototype";

const button = GUIFactory.create(ELEMENT_TYPE.Button, {
  height: "25px",
  width: "40px"
});

console.log(button);

const createdButton = createButton("Click on me");

console.log(createdButton);

const singleton1 = Singleton.getInstence();
const singleton2 = Singleton.getInstence();
console.log(singleton1 === singleton2);

const factory = new WinFactory();
console.log(factory.createButton().paint());
console.log(factory.createCheckbox().paint());

[
  new LoadingButton("A loading button", 99),
  new RoundedButton("A rounded button", 3)
]
  .map(prototype => prototype.clone())
  .forEach(clone => console.log(clone));
