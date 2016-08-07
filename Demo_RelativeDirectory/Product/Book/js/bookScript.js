var myElement = document.createElement("p");
var node = document.createTextNode("This is loaded using bookScript.js");
myElement.appendChild(node);

var myParaDiv = document.getElementById("myParas");
myParaDiv.appendChild(myElement);
