//Pensar ¿qué queremos hacer? ¿qué queremos que se muestre en pantalla?
const movies = []

//Llamamos a los elementos definididos en el html
//getElementById nos ayuda a buscar elementos en otros documentos basándonos en el id definido
//De igual manera, lo guarda en la variable definida
const inputText = document.getElementById("inputText");
const addMovie = document.getElementById("addMovie");
const listContainer = document.getElementById("listContainer");


//Podemos consolear para verificar que los llama correctamente
/* console.log(inputText)
console.log(addMovie)
console.log(listContainer) */

//Agregamos los listeners
//Agregando un listener para el botón
addMovie.addEventListener("click", addPelicula)

//Definir la función, ¿qué queremos que haga?
//Queremos que tome el valor del inputText y que, al apretar el botón, que lo añada al array
function addPelicula(e){
    e.preventDefault()
    //Agregamos preventDefault para que no actue de forma default y no recargue la página

    //Acá tomamos el valor del input
    const peliculaValue = inputText.value
    console.log(peliculaValue)

    //Agregamos un elemento al Array (push)
    movies.push(peliculaValue);
    console.log(movies);

    //Llamamos la función a crear
    showList(movies)
}

//Ahora haremos una función para que al guardar una película, se muestre en algún lado
//Dentro del ${} va el código Javascript
function showList(array){
    return (listContainer.innterHTML = `<ul> ${movies.map((item, index) => `<li key=${index}>${item}</li>`)
.join("")} </ul>`);
}


