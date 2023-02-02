function calcRectangle()
{
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    let perimeter = (2 * width) + (2 * height);
    let area = width * height;
    document.getElementById('Perimeter').innerHTML = perimeter;
    document.getElementById('Area').innerHTML = area;
}

function calcCircle()
{
    var radius = document.getElementById('radius').value;
    let pi = Math.PI;
    let circumfrence = 2 * pi * radius;
    let area = pi * Math.pow(radius, 2);
    document.getElementById('Circumference').innerHTML = circumfrence;
    document.getElementById('Area2').innerHTML = area; 
}