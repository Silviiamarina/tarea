function realizarOperaciones() {
  var valor1 = parseInt(document.getElementById("valor1").value);
  var valor2 = parseInt(document.getElementById("valor2").value);
  var resultado = "";
  for (var i = 1; i <= 4; i++) {
    switch(i) {
      case 1:
        resultado += "Suma de " + valor1 + " y " + valor2 + " es: " + (valor1 + valor2) + "<br>";
        break;
      case 2:
        resultado += "Resta de " + valor1 + " y " + valor2 + " es: " + (valor1 - valor2) + "<br>";
        break;
      case 3:
        resultado += "Multiplicación de " + valor1 + " y " + valor2 + " es: " + (valor1 * valor2) + "<br>";
        break;
      case 4:
        if (valor2 === 0) {
          resultado += "No se puede dividir por cero<br>";
        } else {
          resultado += "División de " + valor1 + " y " + valor2 + " es: " + (valor1 / valor2) + "<br>";
        }
        break;
    }
  }
  document.getElementById("resultado").innerHTML = resultado;
}