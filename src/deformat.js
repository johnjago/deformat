document.getElementById("deformat").addEventListener("click", function() {
  var text = document.getElementById("text");
  text.value = text.value.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
});

document.getElementById("clear").addEventListener("click", function() {
  document.getElementById("text").value = "";
});
