//Almaceno nodos de fechas en variables
const dateDay = document.getElementById('dateDay');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const dateText = document.getElementById('dateText');

//El objeto Date contiene un Number que representa los milisegundos transcurridos desde el 1 de Enero de 1970
//El método toLocaleString() devuelve un cadena con la representación al idioma de la fecha especificada
//Muestro string que me devuelve toLocaleString en nodos almacenados
const setDate = () => {
    const date = new Date();
    dateDay.innerHTML = date.toLocaleString('es', {day: 'numeric'});
    dateMonth.innerHTML = date.toLocaleString('es', {month: 'long'})
    dateYear.innerHTML = date.toLocaleString('es', {year: 'numeric'})
    dateText.innerHTML = date.toLocaleString('es', {weekday: 'long'})
}

setDate();


//Almaceno nodo form y lista de tareas en variable
const form = document.getElementById('form');
const taskList = document.getElementById('taskList');

//addTask se llama cuando el boton + con type="submit" del form es clickeado
// e.target me da el form y puedo acceder al input a través del name
//Creo un div para la tarea y agrego el valor del input, las clases y un listener que llama a otra función
const addTask = (e) => {
    e.preventDefault();
    const value = e.target.newTask.value;

    let task = document.createElement('div');

    task.innerHTML = value;
    task.classList.add('roundBorder', 'newTask');
    task.addEventListener('click', taskState)
    taskList.prepend(task);

    form.reset();
}

// llama a la función addTask al enviar el formulario
form.addEventListener('submit', addTask);

// toma el evento click del div task y toggle agrega o saca la clase done
const taskState = (e) => {
    e.target.classList.toggle('done');
}

// Se llama desde la función render task. Ordena los arrays en uno nuevo en base a si tiene o no clase done
//importante NO DEJAR ESPACIO EN DIV tasklist porque childNodes lo toma como nodo y da error al recorrer DOMTokenlist
const orderTask = () => {
    const toDo = [];
    const done = []; 
    taskList.childNodes.forEach(el => {
        el.classList.contains('done')? done.push(el) : toDo.push(el);
    })
    return [...toDo,...done];
}


//se llama a renderTask con boton ordenar. Agrega las tareas ordenadas a tasklist
const renderTask = () => {
    orderTask().forEach(el => taskList.append(el))
}

//Tomo nodo button y le agrego un listener al hacer click
const btnOrder = document.getElementById('btnOrder');
btnOrder.addEventListener('click', renderTask);



