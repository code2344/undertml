try {
// START OF DOCUMENT CODE



// Start and end script inside 'try' for debugging.



// END OF DOCUMENT CODE
}
// debug
catch(err) {
  var p = document.createElement("p");
  p.innerHTML = 'query/example.js'+err.message;
  document.getElementById("bugboxprint").appendChild(p);
}
