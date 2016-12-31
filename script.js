function triangleArea() {
    var a = document.getElementById("base").value,
        h = document.getElementById("height").value,
        area = a*h/2;

    document.getElementById('x').innerHTML = area;
}