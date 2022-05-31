import { Title } from "./components/title";
import { Image } from "./components/image";
import { Button } from "./components/button";
import alert from "./templates/alert.html";
import frase from "./files/frase.txt";

const title = new Title();

title.create("Welcome!!");

const image = new Image();

image.duck();

const button = new Button();

button.create();

const obj = {
  name: "dani",
  age: 24,
  isDev: true,
};

const { name, ...rest } = obj;

console.log(rest);

let root = document.getElementById("root");
root.innerHTML += alert;

console.log(frase);
