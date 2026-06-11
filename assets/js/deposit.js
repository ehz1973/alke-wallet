// SIMULAMOS EL BALANCE DE LA BASE DE DATOS
let balanceInicial = 100_000;

// CAPTURAMOS EL ELEMENTO DEL DOM QUE MOSTRARÁ EL BALANCE
let balanceEl = document.getElementById("balance");

if (balanceEl) {
    // LE ASIGNAMOS AL ELEMENTO CAPTURADO EL VALOR DE balanceInicial
    balanceEl.innerText = balanceInicial.toLocaleString("es-CL");
}


// CAPTURAMOS EL FORMULARIO DE DEPOSITO

const formDepositoEl = document.getElementById("formDeposito");

if(formDepositoEl){

    formDepositoEl.addEventListener("submit", function(event){

        //PREVENIR ACCIONES POR DEFECTO (ENVIAR DATOS Y ACTUALIZAR PÁGINA)
        event.preventDefault();

        //OBTENEMOS EL VALOR INGRESADO POR EL USUARIO EN EL INPUT
        let montoDeposito = document.getElementById("monto").value;

        //CONVERTIMOS EL VALOR (STRING) A UN TIPO NUMBER
        montoDeposito = Number(montoDeposito);

        //PEDIMOS AL USUARIO CONFIRMAR LA OPERACIÓN DE DEPOSITO
        //USAMOS PARA OBTENER RESPUESTA BOOLEANA (VERDADERO O FALSO)
        let confirmacion = confirm(`¿Está seguro de depositar ${montoDeposito} a su cuenta?`);

        if(!confirmacion){
            //SI EL USUARIO CANCELA
            //CON RETURN TERMINAMOS LA EJECUCIÓN DEL CÓDIGO
            return;
        }


        //OBTEMOS EL VALOR DEL BALANCE ACTUAL Y LE AGREGAMOS EL MONTO DEPOSITADO

        balanceInicial += montoDeposito;

        //ACTUALIZAMOS EL ELEMENTO DEL DOM QUE MUESTRA EL BALANCE
        balanceEl.innerText = balanceInicial.toLocaleString("es-CL");

        //FINALMENTE LIMPIAMOS EL FORMULARIO}
        formDepositoEl.reset();

        //LE DAMOS UN MENSAJE DE ÉXITO AL USUARIO
        alert(`Se ha depositado un total de $ ${montoDeposito} en su cuenta...`);
        
    });

}