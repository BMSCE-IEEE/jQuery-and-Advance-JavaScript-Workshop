var myElement = document.createElement("p");
var node = document.createTextNode("This is loaded using productScript.js");
myElement.appendChild(node);

var myParaDiv = document.getElementById("myParas");
myParaDiv.appendChild(myElement);
