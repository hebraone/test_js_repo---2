function triangleArea(){
	var a = document.getElementById("base").value;
	var h = document.getElementById("height").value;
	var area = a*h/2
	document.getElementById('x').innerHTML = area;
}