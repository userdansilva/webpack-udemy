import $ from "jquery";

const body = $("body");

const h1 = $("<h1></h1>").text("This is fine").css("color", "blue");

body.append(h1);
