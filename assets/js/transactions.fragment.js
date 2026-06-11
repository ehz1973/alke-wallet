// SIMULAMOS EL BALANCE DE LA BASE DE DATOS
let balanceInicial = 100_000;

// CAPTURAMOS EL ELEMENTO DEL DOM QUE MOSTRARÁ EL BALANCE
let balanceEl = document.getElementById("balance");

if (balanceEl) {
    // LE ASIGNAMOS AL ELEMENTO CAPTURADO EL VALOR DE balanceInicial
    balanceEl.innerText = balanceInicial.toLocaleString("es-CL");
}

// SIMULAR DATA DE REGISTROS DE TRANSACCIONES
let transacciones = [
    { id: 1, glosa: "Compra en línea", monto: 50_000, ingreso: false},
    { id: 2, glosa: "Transferencia recibida ", monto: 150_000, ingreso: true },
    { id: 3, glosa: "Depósito", monto: 100_000, ingreso: true },
    { id: 4, glosa: "Compra Cyber Day", monto: 75_000, ingreso: false },
];

// CAPTURAMOS LISTA DONDE SE AGREGARÁN LOS LI
const listaTransaccionesEl = document.getElementById("listaTransacciones");

if (listaTransaccionesEl) {
    // Usamos DocumentFragment para evitar reflows/repints múltiples
    const fragment = document.createDocumentFragment();

    for (const transaccion of transacciones) {
        const li = document.createElement("li");
        li.className = "list-group-item list-group-item-action";

        if(transaccion.ingreso){
            //si ingreso tiene como valor true hacemos lo siguiente:
            li.classList.add("list-group-item-success");
        }else {
            //si es falso
            li.classList.add("list-group-item-danger");
        }

        const monto = transaccion.monto.toLocaleString("es-CL");
        li.textContent = `${transaccion.glosa} - $${monto}`;

        fragment.appendChild(li);
    }

    // Limpiamos la lista actual (si existe contenido) y insertamos el fragmento de una sola vez
    listaTransaccionesEl.innerHTML = "";
    listaTransaccionesEl.appendChild(fragment);
}
