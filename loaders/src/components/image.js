import Duck from "../assets/images/duck.jpg";

class Image {
  duck() {
    const img = document.createElement("img");

    img.src = Duck;
    img.width = 200;

    document.getElementById("root").appendChild(img);
  }
}

export { Image };
