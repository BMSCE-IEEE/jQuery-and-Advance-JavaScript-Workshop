var myElement = document.createElement("p");
var node = document.createTextNode("This is loaded using demoScript.");
myElement.appendChild(node);

var myParaDiv = document.getElementById("myParas");
myParaDiv.appendChild(myElement);
