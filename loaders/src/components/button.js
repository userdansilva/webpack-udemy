import "./button.scss";

class Button {
  create() {
    const button = document.createElement("button");

    button.innerText = "MyButton";

    button.classList.add("my-button");

    document.getElementById("root").appendChild(button);
  }
}

export { Button };
