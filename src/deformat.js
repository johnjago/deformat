// @license magnet:?xt=urn:btih:e95b018ef3580986a04669f1b5879592219e2a7a&dn=public-domain.txt Unlicense
document.getElementById("deformat").addEventListener("click", function() {
  var text = document.getElementById('input').value;
  text = text.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
  document.getElementById("input").value = text;
}, false);

document.getElementById("clear").addEventListener("click", function() {
  document.getElementById("input").value = "";
}, false);
// @license-end
