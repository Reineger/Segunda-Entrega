function calcularPromedioPonderado() {
  // Obtiene los valores ingresados por el usuario
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);

  // Verifica que las notas estén en el rango de 1 a 7
  if (nota1 < 1 || nota1 > 7 || nota2 < 1 || nota2 > 7 || nota3 < 1 || nota3 > 7) {
    alert("Las notas deben estar entre 1 y 7");
    return;
  }

  // Calcula el promedio ponderado
  var promedio = (nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5);

  // Verifica si el estudiante aprobó o no
  if (promedio >= 4) {
    document.getElementById("resultado").innerHTML = "Aprobado";
  } else {
    document.getElementById("resultado").innerHTML = "Reprobado";
  }

  // Muestra el resultado del promedio ponderado
  document.getElementById("promedio").innerHTML = promedio;
}
