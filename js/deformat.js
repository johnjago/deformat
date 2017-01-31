function deformat(input) {
	var text = document.getElementById('input').value;
	text = text.replace(/(\r\n|\n|\r)/gm, " ");
	text = text.replace(/\s+/g, " ");
	document.getElementById('input').value = text;
}

function eraseText() {
    document.getElementById("input").value = "";
}
