//elementos del DOM
const form = document.getElementById("form");
const button = document.getElementById("enviar");
const mail = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const nombreC = document.getElementById("nombre");

//Expresion Regular Nombre
const regExName = /^[a-z ,.'-]+$/;
//Expresion Regular para validar un telefono de 10 digitos
const regExTel = /^\d{10}$/gi;

//Expresiones regulares para validar email corporativo excluyendo email comercial
const emailInitial =
  /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@(((\w\s*(?!(hotmail)|(gmail)|(yahoo)).)+\.)+[a-zA-Z]{2,})$/;

const emailRegex =
  /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateName = (name) => {
  if (regExName.test(name)) {
    console.log("Nombre Correcto");
  } else {
    console.log("Nombre Incorrecto");
  }
};
const validateTelefono = (telefono) => {
  if (regExTel.test(parseInt(telefono))) {
    console.log("Telefono Correcto");
  } else {
    console.log("Telefono Incorrecto");
  }
};
const validateEmail = (email) => {
  console.log(email);
  if (emailInitial.test(email) && emailRegex.test(email))
    console.log("email válido");
  else console.log("email incorrecto");
};

mail.addEventListener("change", (e) => {
  validateEmail(e.target.value.trim());
});

telefono.addEventListener("change", (e) => {
  console.log(e.target.value);
  validateTelefono(parseInt(e.target.value));
});
nombreC.addEventListener("change", (e) => {
  validateName(e.target.value.trim());
});
