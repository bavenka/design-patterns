import "./design-patterns/creational/factory-method";
import {
  GUIFactory,
  ELEMENT_TYPE
} from "./design-patterns/creational/simple-factory";

import { createButton } from "./design-patterns/creational/factory-object-creation";

import { Button as Singleton } from "./design-patterns/creational/singleton";

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
