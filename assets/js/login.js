//CAPTURAR EL FORMULARIO DE LOGIN DEL DOM

const formLoginEl = document.getElementById("formLogin");

if(formLoginEl){

    formLoginEl.addEventListener("submit", function(event){
        //AQUÍ AGREGAMOS LA LÓGICA DE LO QUE HARÁ EL FORMULARIO AL REALIZAR EL SUBMIT

        console.log("Dentro del evento...");
        //CON event.preventDefault() evitamos las acciones por defecto del formulario.
        event.preventDefault();

        //CAPTURAMOS EL VALOR INGRESADO POR EL USUARIO EN LOS INPUTS
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        //SIMULADOS LOS DATOS DE LA BASE DE DATOS
        let emailDB = "usuario@gmail.com";
        let passwordDB = "123456";

        //VALIDAMOS SI LOS DATOS INGRESADOS POR EL USUARIO COINCIDEN CON LOS DE LA BASE DE DATOS SIMULADA
        if(email == emailDB && password == passwordDB){
            //SI AMBAS CONDICIONES SE CUMPLEN EJECUTAMOS LO SIGUIENTE:
            alert("Sesión iniciada correctamente.");
            // REDIRECCIONAMOS A OTRA PÁGINA
            location.href = "./index.html";
        }else{
            //SI AL MENOS 1 CONDICIÓN NO SE CUMPLE SE EJECUTA LO SIGUIENTE:
            alert("Email y/o password incorrectos, vuelva a intentar.");
        }
    });
}