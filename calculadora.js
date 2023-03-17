function calcularPromedio() {
  // Obtiene los valores ingresados por el usuario
  var nota1 = parseInt(document.getElementById("nota1").value);
  var nota2 = parseInt(document.getElementById("nota2").value);
  var nota3 = parseInt(document.getElementById("nota3").value);

  // Calcula el promedio
  var promedio = (nota1 + nota2 + nota3) / 3;

  // Verifica si el estudiante aprobó o no
  if (promedio >= 4) {
    document.getElementById("resultado").innerHTML = "Aprobado";
  } else {
    document.getElementById("resultado").innerHTML = "Reprobado";
  }

  // Muestra el resultado del promedio
  document.getElementById("promedio").innerHTML = promedio;
}
