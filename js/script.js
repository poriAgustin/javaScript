let userName = 'pori';
let pass = '123456';

function login(params) {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let user = prompt('Ingresa tu Nombre de Usuario');
        let userPass = prompt('Ingresa tu Contraseña');

        if (user == userName) {
            alert('Usuario Correcto. ');
        } else{
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



if (login()) {

    let opcion = prompt('Elegi una opcion: \n1- Info de cuenta. \n2- Calcular compra. \n3- Descuentos. \n Presiona X para terminar');

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

        opcion = prompt('Elegi una opcion: \n1- Info de cuenta. \n2- Calcular compra. \n3- Descuentos. \n Presiona X para terminar');

    }

} else {
    alert('Te retendremos la cuenta por 30 minutos.');
}


alert('Gracias por tu visita, vuelva prontos');