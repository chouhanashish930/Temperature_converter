function Converter() {
    var a = (document.getElementById("a1").value);
    var result;
    var un = document.getElementById("unit").value;
    var a1 = (document.getElementById("cel").value);
    var a2 = (document.getElementById("feh").value);
    if (un == a1) {
        result = (a * 9 / 5) + 32;
        document.getElementById("c2").innerHTML = "Convert Fahrenheit : " +  result + "&nbsp" + "F"; // window.alert(result);
        Break;
    } else if (un == a2) {
        result1 = (a - 32) * 5 / 9;
        document.getElementById("c2").innerHTML = "Convert Celsius : " + result1 + "&nbsp;" + "C";
        Break;
    } else {
        window.alert("Error");
    }
}