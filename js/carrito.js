const productos = [
    {
        id: "alfombra-01",
        titulo: "Alfombra 01",
        imagen: "../img/alfombraCoke.jpg",
        categoria: {
            nombre: "Alfombras",
            id: "alfombras"
        },
        precio: 6000
    },

    {
        id: "alfombra-02",
        titulo: "Alfombra 02",
        imagen: "../img/alfombraFaze.jpg",
        categoria: {
            nombre: "Alfombras",
            id: "alfombras"
        },
        precio: 7000
    },

    {
        id: "alfombra-02",
        titulo: "Alfombra 02",
        imagen: "../img/alfombraJordan.jpg",
        categoria: {
            nombre: "Alfombras",
            id: "alfombras"
        },
        precio: 9000
    },

    {
        id: "alfombra-03",
        titulo: "Alfombra 03",
        imagen: "../img/alfombraNegra.jpg",
        categoria: {
            nombre: "Alfombras",
            id: "alfombras"
        },
        precio: 6000
    },

    {
        id: "alfombra-04",
        titulo: "Alfombra 04",
        imagen: "../img/alfombraNegra2.jpg",
        categoria: {
            nombre: "Alfombras",
            id: "alfombras"
        },
        precio: 6000
    },

    {
        id: "alfombra-05",
        titulo: "Alfombra 05",
        imagen: "../img/alfombraNikeSb.jpeg",
        categoria: {
            nombre: "Alfombras",
            id: "alfombras",
        },
        precio: 6500
    },

    {
        id: "alfombra-06",
        titulo: "Alfombra 06",
        imagen: "../img/alfombraVerde.jpeg",
        categoria: {
            nombre: "Alfombras",
            id: "alfombras"
        },
        precio: 5000
    },

    {
        id: "alfombra-07",
        titulo: "Alfombra 07",
        imagen: "../img/alfombraWeBad.jpeg",
        categoria: {
            nombre: "Alfombras",
            id: "alfombras"
        },
        precio: 6800
    },
]

// Elementos del DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<img class="producto-img" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>`;

        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
    console.log(botonesAgregar);
}

cargarProductos(productos);

// botonesCategorias.forEach(boton => {
//     boton.addEventListener("click", (e) => {
//         botonesCategorias.forEach(boton => boton.classList.remove("active"))
//         e.currentTarget.classList.add("active");

//         // Sistema de filtrado para cuando agg otras cosas al carrito

//         if (e.currentTarget.id != "todos") {
//             const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
//             cargarProductos(productosBoton);
//         } else {
//             cargarProductos(productos);
//         }

//     })
// });


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productoEnCarrito;
let productosEnCarrito2LS = JSON.parse(localStorage.getItem("productoEnCarrito"));

if (productosEnCarrito2LS) {
    productoEnCarrito = productosEnCarrito2LS;

} else {
    productoEnCarrito = []
}
const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productoEnCarrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(params) {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}






