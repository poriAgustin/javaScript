let productosEnCarrito2 = JSON.parse(localStorage.getItem("productoEnCarrito"));
console.log(productosEnCarrito2);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const carritoAccionesTotal = document.querySelector(".carritoAccionesTotal");
const carritoAccionesComprar = document.querySelector(".carrito-acciones-comprar")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");

contenedorCarritoProductos.innerHTML = "";

function cargarProductosCarrito() {
    if (productosEnCarrito2) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        carritoAccionesTotal.classList.remove("disabled");
        carritoAccionesComprar.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");


        productosEnCarrito2.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `<img class="carrito-prod-img" src="${producto.imagen}" alt="${producto.titulo}">
              <div class="carrito-producto-titulo">
                  <small>Titulo</small>
                  <h3>${producto.titulo}</h3>
              </div>
              <div class="carrito-producto-cantidad">
                  <small>Cantidad</small>
                <p>${producto.cantidad}</p>
              </div>
              <div class="carrito-producto-precio">
                  <small>Precio</small>
                  <p>$${producto.precio}</p>
              </div>
              <div class="carrito-producto-subtotal">
                  <small>Subtotal</small>
                  <p>$${producto.precio * producto.cantidad}</p>
              </div>
              <button class="carrito-producto-eliminar id="${producto.id}"><i class="bi bi-trash-fill"></i></button>`;

            contenedorCarritoProductos.append(div);

        });

    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        carritoAccionesTotal.classList.add("disabled");
        carritoAccionesComprar.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito() {
    let idBoton = e.currentTarget.id;
    const index = productosEnCarrito2.findIndex(producto => producto.id === idBoton);
    productosEnCarrito2.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productosEnCarrito", JSON.stringify())
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito2.legnth = 0;
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito2));
    cargarProductosCarrito();
}

function actualizarTotal(params) {
    const totalCalculado = productosEnCarrito2.reduce((acc, producto)=> acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}