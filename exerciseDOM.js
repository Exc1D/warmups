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
blueHeader.classList.add("blueHeader");
blueHeader.textContent = "I'm a blue H3!";
container.appendChild(blueHeader);

const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
newDiv.style.border = "2px solid black";
newDiv.style.background = "pink";
container.appendChild(newDiv);

const divHeader = document.createElement("h1");
divHeader.classList.add("divHeader");
divHeader.textContent = "I'm in a div";
newDiv.appendChild(divHeader);

const divParagraph = document.createElement("p");
divParagraph.classList.add("divParagraph");
divParagraph.textContent = "ME TOO!";
newDiv.appendChild(divParagraph);
