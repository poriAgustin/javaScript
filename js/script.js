let userName = 'pori';
let pass = '123456';

// Funcion para logearse
function login(params) {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let user = prompt('Ingresa tu Nombre de Usuario');
        let userPass = prompt('Ingresa tu Contraseña');

        if (user == userName) {
            alert('Usuario Correcto. ');
        } else {
            alert('Usuario Incorrecto')
        }

        if (userPass == pass) {
            alert('El login fue exitoso. Bienvenido/a ' + userName);
            ingresar = true;
            break;

        }

        else {
            alert('Te quedan pocos intentos.')
        }
    }

    return ingresar;

}


// Opciones para despues de logearse
if (login()) {

    let opcion = prompt('Elegi una opcion: \n1- Info de cuenta. \n2- Calcular compra. \n3- Descuentos. \n Con la compra de una rug, te llevas una rug personalizada de 20 x 20 cm, Apreta X.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {
            case '1':
                let infoDeCuenta = ('\n1-Nombre: Agustin Daniele \n2- Edad : 22 \n3-Altura: 1.85 \n4- Saldo $50000')
                alert(infoDeCuenta);
                break;

            case '2':
                const IVA = 1.21;
                let importe = parseInt(prompt('Ingrese la cantidad de saldo para calcular'))
                let importeConIva = importe * IVA;
                alert('El total es de $' + importeConIva);

                break;

            case '3':
                let cuponDescuento = 1500;
                let total = parseInt(prompt('Ingresa el total para calcular el descuento.'))
                let descuentoTotal = total - cuponDescuento;
                alert('El total + el descuento serian $' + descuentoTotal)

                break;




            default:
                alert('Elegiste una opcion invalida')
                break;
        }

        opcion = prompt('Elegi una opcion: \n1- Info de cuenta. \n2- Calcular compra. \n3- Descuentos. \n Con la compra de una rug, te llevas una rug personalizada de 20 x 20 cm, Apreta X.');

    }

} else {
    alert('Te retendremos la cuenta por 30 minutos.');
}


class Alfombra {

    constructor(color, tamanio, nombreColocar, valoracion, id) {
        this.color = color;
        this.tamanio = tamanio;
        this.nombreColocar = nombreColocar;
        this.valoracion = parseInt(valoracion);
        this.id = id;

    }

    asignarId(array) {
        this.id = array.length;
    }
}

// Array de alfombras
const alfombras = [

    new Alfombra('Roja', 'Chica', 2015, 9, 1),
    new Alfombra('Azul', 'Grande', 2020, 7, 2),
    new Alfombra('Verde', 'Mediana', 2022, 5, 3),
    new Alfombra('Celeste', 'XXL', 2018, 8, 4),
    new Alfombra('Marron', 'XS', 2019, 10, 5)

]

console.log(alfombras);

let continuar = true;

// Agregar una nueva alfombra
while (continuar) {

    let ingreso = prompt('Ingresa los datos de la alfombra: color, tamaño, nombre / palabra a colocar y valoracion, separados por una barra diagonal ( / ). Ingresa X para finalizar')

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    const datos = ingreso.split('/')
    console.log(datos);

    const alfombra = new Alfombra(datos[0], datos[1], datos[2], datos[3], datos[4]);

    alfombras.push(alfombra);
    alfombra.asignarId(alfombras);
    console.log(alfombras);


}
// Array para meterle metodos de busqueda y filtrado
const productos = [{
    nombre: 'AlfombraWeBad',
    precio: 8000
},
{
    nombre: 'Alfombra Jordan',
    precio: 10000
},
{
    nombre: 'Alformbra Coca Cola',
    precio: 9000
},
{
    nombre: 'Alfombra Faze Wrold',
    precio: 7500,
},
]

// Metodos de busqueda
const encontrado = productos.find(productos => productos.precio > 9000)
// let buscador = parseInt(prompt('Busca tu alfombra por precios'));
// alert(encontrado)
console.log(encontrado);

// Producto en particular
const algunProducto = productos.some(productos => productos.precio > 9500);

console.log(algunProducto);

// Filtrado de productos
const filtrado = productos.filter(productos => productos.precio > 8500);

console.log(filtrado);

// Busqueda por terminos
let keyword = prompt('Ingresa el termino de busqueda');

const otroFiltrado = productos.filter(productos => productos.nombre.includes(keyword));

console.log(otroFiltrado);

// Precio final de todo el array de alfombras
const precioFinal = productos.reduce((acumulador, productos) => {
    return acumulador += productos.precio
},0)

console.log(precioFinal);

alert('Gracias por su visita, vuelva prontos');