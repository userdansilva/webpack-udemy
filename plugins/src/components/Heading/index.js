import "./index.css";

class Heading {
  create(title) {
    const h1 = document.createElement("h1");

    h1.innerText = title;
    h1.classList.add("heading");

    const root = document.querySelector("body");

    root.appendChild(h1);
  }
}

export { Heading };
