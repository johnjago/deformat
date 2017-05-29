document.getElementById('deformat').addEventListener('click', function() {
  var text = document.getElementById('input').value;
  text = text.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
  document.getElementById('input').value = text;
}, false);

document.getElementById('clear').addEventListener('click', function() {
  document.getElementById("input").value = "";
}, false);
