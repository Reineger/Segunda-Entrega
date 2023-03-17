function calcularPromedioPonderado() {
  // Obtiene los valores ingresados por el usuario
  var certamen1 = parseInt(document.getElementById("certamen1").value);
  var certamen2 = parseInt(document.getElementById("certamen2").value);
  var Examen = parseInt(document.getElementById("Examen").value);

  // Calculo del promedio ponderado + sus %
  var promedio = (certamen1 * 0.2) + (certamen2 * 0.3) + (Examen * 0.5);

  // Verificador aprueba o reprueba
  if (promedio >= 4) {
    document.getElementById("resultado").innerHTML = "Aprobado";
  } else {
    document.getElementById("resultado").innerHTML = "Reprobado";
  }

  // Muestra el resultado del promedio ponderado
  document.getElementById("promedio").innerHTML = promedio;
}
