function triangleArea(){
	var a = document.getElementById("podstawa").value;
	var h = document.getElementById("wysokosc").value;
	var area = a*h/2
	document.getElementById('x').innerHTML = area;
}