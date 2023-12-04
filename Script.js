/*
let Titulo_1 = "Electronica"
//Con querySelector llamo al archivo CSS por su Id, clase, etc

let titulo = document.querySelector("#Titulo_Principal");

titulo.innerHTML= Titulo_1;


//Condicional

//innerText es una propiedad que LEE lo que esta escrito en el html (En la pagina)


let Titulo_2 = titulo.innerText;
console.log(Titulo_2)

if (Titulo_2 == "Electronica"){
    titulo.innerHTML ="Electrica"
} else {
    console.log("No se cumple")
}
*/

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");


function validarFormulario() {
  let warnings = "  ";
  let valido = true;
  parrafo.innerHTML = "";
  //Muestra que tipo de variable se esta usando
  console.log(typeof nombre.value)
  //Constante creada para NO permitir numeros
  const validar_numero = /^[A-Z]+$/i;

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
    console.log("Si entro")
    return;
  }
//Validacion de NO PERMITIR NUMEROS
  if(!validar_numero.test(nombre.value)){
    warnings += `El nombre no puede contener numeros`;
    valido = false;
    
  }


  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});



