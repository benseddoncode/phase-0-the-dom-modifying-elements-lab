// Write your code here!
// document.querySelector("main#main").remove();

const removeMainElement = document.querySelector('main');
removeMainElement.remove()

const newHeader = document.createElement("h1")
newHeader.id = "victory"

newHeader.innerHTML = "<h1>Ben Seddon is the champion"