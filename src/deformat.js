document.getElementById("deformat").addEventListener("click", function() {
	const text = document.getElementById("text");
	text.value = text.value.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
});

document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("text").value = "";
});

document.getElementById("copy").addEventListener("click", function () {
	const text = document.querySelector("#text");
	text.select();
	document.execCommand("copy");
	showToast();
});

function showToast() {
	const toast = document.getElementById("toast");
	toast.style.display = "block";
	setTimeout(() => {
		toast.style.display = "none";
	}, 3000);
}
