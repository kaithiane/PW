function trocaImagem() {
	document.getElementById("myImage").src="img/html-logo-badge-512.png";
}

function imagemTroca() {
	document.getElementById("myImage").src="img/js-logo-badge-512.png";
}

function trocaFonteMaior() {
	document.getElementById("demo").style.fontSize="35px";
}

function trocaFonteMenor() {
	document.getElementById("demo").style.fontSize="16px";
}

function olcutarElemento() {
	document.getElementById("demo").style.display="none";
}

function mostrarElemento() {
	document.getElementById("demo").style.display="block";
}

function calcularElemento() {
	var total = parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);
	window.alert(total);
}