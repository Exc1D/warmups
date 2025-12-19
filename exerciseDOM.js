const { createElement } = require("react");

// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.classList.add("redParagraph");
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);

const blueHeader = document.createElement("h3");
blueHeader.classList("blueHeader");
blueHeader.textContent = "I'm a blue H3!";
container.appendChild(blueHeader);

const newDiv = createElement("div");
newDiv.classList.add("newDiv");
newDiv.setAttribute("style", "border: 2px solid black; background: pink");
