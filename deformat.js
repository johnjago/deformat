function deformat(input) {
	var text = document.getElementById('input').value;
	var strippedText = text.replace(/<(?:.|\n)*?>/gm, '');
	var strippedText = text.replace(/(\r\n|\n|\r)/gm, " ");
	var strippedText = text.replace(/\s+/g, " ");
	document.getElementById('output').value = strippedText;
}
