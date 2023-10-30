/**
 * Author: Alejandro González-Corroto Fernández
 * Git HUb: https://github.com/Rocket201/Examen-Tema2.git
 */

let saldo = 1000
let PIN_CORRECTO = 1234
let intentos = 3

// llamamos a iniciar sesion para que cargue el metodo contraseña

window.addEventListener("load", contraseña);

//Recogemos los elementos del documento

const depositarBtn = document.getElementById("depositarBtn")
const retirarBtn = document.getElementById("retirarBtn")
const transferirBtn = document.getElementById("transferirBtn")
const cambiarcontraseñaBtn = document.getElementById("cambiarcontraseñaBtn")
const salirBtn = document.getElementById("salirBtn")
const saldoTemplate = document.getElementById("saldoTempla")

//los escuchamos con un addEvenListener
 depositarBtn.addEventListener("click", depositar);
 retirarBtn.addEventListener("click", retirar);
 transferirBtn.addEventListener("click", transferir);
 cambiarcontraseñaBtn.addEventListener("click", cambiarcontraseña);
 salirBtn.addEventListener("click", salir);

 // creo la función depositar
function depositar(){
    console.log("depostiar funciona")
   let deposito = parseFloat(prompt("introduce tu deposito: "))
    if (deposito <= 0  || isNaN (deposito) || deposito > saldo){
      alert(" Introduce un dato correcto ")
      
    }else{ 
      saldo += deposito;
      alert(`Tu saldo ha sido actualizado a ${saldo.toFixed(2)} €`)
      saldoActualizado()
       
    }
}

// Funcion para retirar dinero
function retirar(){
  const extraccion = parseFloat(prompt("Introduce la candidad que quieres retirar:"));
  if (isNaN(extraccion) || extraccion <= 0 || extraccion > saldo) {
    alert(" Introduce un dato correcto ");
  } else {
    saldo -= extraccion;
    alert(`Retiraste: ${extraccion.toFixed(2)} €`);
    saldoActualizado()
  }

}
// Funcion para trasnferir dinero
function transferir(){
  console.log(" Entra en transferir")
  let cantidad = parseFloat(prompt("Cuanto quiere transferir: "));
  if (isNaN(cantidad)|| cantidad > saldo|| cantidad <= 0 ) {
     
    alert("Upps..., cantidad no válida o insuficiente.");
  } else {
    let destinatario = prompt("Ingresa el IBAN");
    console.log(" Entra en else")
    if (validarIBAN(destinatario)) {
        alert(`La cuenta ${destinatario} no es válida`)
          return
    }else{
    alert(`Transferiste-> ${cantidad.toFixed(2)} € a la cuenta ${destinatario}.`);
    saldo -= cantidad;
    saldoActualizado() }
  }
}
// Funcion para cambiar la contraseña
function cambiarcontraseña(){
  console.log("Entra en cambiar contraseña")
  let nuevaContraseña = parseFloat(prompt("Introduce tu nueva contraseña:"))
    PIN_CORRECTO = nuevaContraseña;
    actualizarContraseña()
  
}
//funcion para salir del cajero
function salir(){
    console.log("salir funciona")
    window.location.replace("/locations/salir.html")
}
//Funcion para introducir la contraseña y solo despues de eso te dejará ver el saldo
function contraseña(){
    console.log("funcion contraseña")
  let contraseña = parseFloat(prompt("Introduce la contraseña: "))
    while (contraseña !== PIN_CORRECTO && intentos> 1) {
      intentos--;
      alert(`Te quedan ${intentos}`)
      contraseña = prompt("Ingresa tu contraseña:");
    }if (contraseña === PIN_CORRECTO) {
      alert(`Sesion iniciada`);
      saldoActualizado()
    } else {
      alert(`Cajero bloqueado, intentelo mas tarde`);
      window.location.replace("/locations/error.html");
    }
}
// Funcion para Actuaizar el saldo
function saldoActualizado(){
    console.log(" Saldo actual ")
    saldoTemplate.innerText = `Tu saldo es: ${saldo} €`
}
//funcion para actualizar contrASEÑA
  function actualizarContraseña(){
    console.log(" actualizar contraseña ")
    saldoTemplate.innerText = `Tu nueva contraseña es: ${PIN_CORRECTO}`
 }

function validarIBAN(iban) {
  var Expresion = /^(ES\d{22})$/;
  return Expresion.test(iban);
}
