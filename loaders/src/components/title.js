import "./title.css";

class Title {
  create(title) {
    const h1 = document.createElement("h1");

    h1.innerText = title;

    h1.classList.add("title");

    document.getElementById("root").appendChild(h1);
  }
}

export { Title };
