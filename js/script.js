// registrarse(storage) {
    
// }

const usuarios = [{
    nombre: 'Facundo',
    mail: 'facundo.vilchez@mail.com',
    pass: 'yankee305'
},
{
    nombre: 'Flor',
    mail: 'florlud@mail.com',
    pass: 'bocaJuniors12'
},
{
    nombre: 'Agustin',
    mail: 'agustindaniele00@mail.com',
    pass: 'bokita'
}]

const alfombras = [{
    nombre: 'Jordan',
    color: 'Negro, morado, amarillo',
    medida: 'Grande'
},
{
    nombre: 'Faze - Wrold',
    color: 'Negro, amarillo, naranja, azul',
    medida: 'Chica'
},
{
    nombre: 'Nike sb',
    color: 'Verde, morado, azul, blanco, rojo, amarillo',
    medida: 'Estandar'
},
{
    nombre: 'WeBad',
    color: 'Blanco, gris, negro',
    medida: 'Estandar'
},
{
    nombre: 'ThenNoPlay',
    color: 'Negro, blanco',
    medida: 'Estandar'
},
{
    nombre: 'Dinosaurio',
    color: 'Verde, negro',
    medida: 'Estandar'
},
{
    nombre: 'CocaCola',
    color: 'Negro, blanco',
    medida: 'Chica'
}]


//Todos los elementos del DOM
const inputMailLogin = document.getElementById('emailLogin'),
    inputPassLogin = document.getElementById('passwordLogin'),
    checkRecordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    elementosToggleables = document.querySelectorAll('.toggeable');


//La función de validar se aprovecha del tipo de return que hace el método find
function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);
    console.log(encontrado)
    console.log(typeof encontrado)

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        //si estoy en este punto, quiere decir que el usuario existe, queda comparar la pass
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

//guardamos los datos del usuario que recuperamos de la database en el storage, para tener disponible el nombre
function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

//Limpiar los storages
function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

//Recupero los datos que se guardaron en el storage y los retorno
function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}

//Esta funcion saludo al usuario logeado, usando los datos del storage
function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}


//Esta función nos permite cambiar la visualización de los elementos del DOM, agregando o sacando la clase d-none. Si el elemento la tiene, se la saco, y si no la tiene, se la agrego.
function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

//Esta función revisa si hay un usuario guardado en el storage, y en ese caso evita el proceso de login 
function estaLogueado(usuario) {

    if (usuario) {
        saludar(usuario);
        presentarInfo(elementosToggleables, 'd-none');
    }
}


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    //Validamos que ambos campos estén completos
    if (!inputMailLogin.value || !inputPassLogin.value) {
        alert('Todos los campos son requeridos');
    } else {
        let data = validarUsuario(usuarios, inputMailLogin.value, inputPassLogin.value);

        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {

            //Revisamos si elige persistir la info aunque se cierre el navegador o no
            if (checkRecordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            //Recién ahora cierro el cuadrito de login
            modal.hide();
            //Muestro la info para usuarios logueados
            presentarInfo(elementosToggleables, 'd-none');
        }
    }
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(elementosToggleables, 'd-none');
});

estaLogueado(recuperarUsuario(localStorage));