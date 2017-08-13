// magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GNU GPLv3
document.getElementById("deformat").addEventListener("click", function() {
  document.getElementById("text").value = document.getElementById("text").value.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
});

document.getElementById("clear").addEventListener("click", function() {
  document.getElementById("text").value = "";
});
// @license-end
