const Tarea = function (nombre, estado, prioridad) {
  (this.nombre = nombre), (this.estado = estado), (this.prioridad = prioridad);
};

let tarea1 = new Tarea("Estudiar", false, 1);
let tarea2 = new Tarea("Comprar comida para los gatos", true, 1);
let tarea3 = new Tarea("Limpiar fondo", false, 3);
let tarea4 = new Tarea("Contactar techista", false, 2);
let tarea5 = new Tarea("Limpiar living", true, 2);
let tarea6 = new Tarea("Organizar trabajo", false, 1);

let listaDeTareas = [tarea1, tarea2, tarea3, tarea4, tarea5, tarea6];

let listaDeFunciones = [visualizarLista, visualizarFunciones, agregarTarea, borrarUltima, eliminarTarea, tildarTarea, sacarTilde]

function visualizarLista() {
  console.table(listaDeTareas);
}

function visualizarFunciones() {
    console.log(listaDeFunciones);
}

function agregarTarea() {
  let nombre = prompt("Ingresá el nombre de la nueva tarea");

  if (nombre === "") {
    alert("La tarea debe tener un nombre asignado");
    return;
  }

  let prioridad = parseInt(
    prompt(
      "Ingresá la prioridad de la tarea, de 1 a 3, siendo 1 la prioridad más alta"
    )
  );

  if (isNaN(prioridad) || prioridad < 1 || prioridad > 3) {
    alert("La prioridad debe ser un número entre 1, 2 o 3");
    return;
  }

  let nuevaTarea = new Tarea(nombre, false, prioridad);

  listaDeTareas.push(nuevaTarea);

  alert("Tu nueva tarea " + nuevaTarea.nombre + " fue agregada con éxito");

  console.table(listaDeTareas);
}

function borrarUltima() {
  listaDeTareas.pop();
  console.table(listaDeTareas);
}

function eliminarTarea() {
  let = objetivo = parseInt(
    prompt("Elija la tarea a eliminar según su índice")
  );

  if (isNaN(objetivo) || objetivo > listaDeTareas.length) {
    alert("Debe indicar un número de índice de la tarea a eliminar");
    return;
  }

  listaDeTareas.splice(objetivo, 1);

  console.table(listaDeTareas);
}

function tildarTarea() {
  let nombreTarea = prompt(
    "Ingresa el nombre de la tarea para cambiar su estado:"
  ).toLowerCase();
  let tareaEncontrada = listaDeTareas.find(
    (tarea) => tarea.nombre.toLowerCase() === nombreTarea
  );

  if (tareaEncontrada === undefined) {
    alert(
      "No se encontró una tarea con el nombre indicado. Por favor vuelva a intentarlo."
    );
    return;
  }

  if (tareaEncontrada.estado === true) {
    alert("La tarea seleccionada ya se encuentra tildada como realizada");
  } else {
    tareaEncontrada.estado = true;
    alert(
      "La tarea " + tareaEncontrada.nombre + " ha sido tildada correctamente."
    );
    console.table(listaDeTareas);
  }
}

function sacarTilde() {
    let nombreTarea = prompt(
      "Ingresa el nombre de la tarea para quitar su tildado:"
    ).toLowerCase();
    let tareaEncontrada = listaDeTareas.find(
      (tarea) => tarea.nombre.toLowerCase() === nombreTarea
    );
  
    if (tareaEncontrada === undefined) {
      alert(
        "No se encontró una tarea con el nombre indicado. Por favor vuelva a intentarlo."
      );
      return;
    }
  
    if (tareaEncontrada.estado === false) {
      alert("La tarea seleccionada no está tildada como realizada");
    } else {
      tareaEncontrada.estado = false;
      alert(
        "El tildado de la tarea " + tareaEncontrada.nombre + " ha sido quitado."
      );
      console.table(listaDeTareas);
    }
  }

console.log("Este es un simulador de lista de tareas")
console.log("A continuación la lista de tareas en sí")
console.table(listaDeTareas);
console.log("Ahora, aquí debajo está el listado de funciones que pueden ejecutarse sobre la lista")
console.log(listaDeFunciones)




