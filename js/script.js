// Menu navbar toggle
const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-menu-item");
const hamburger= document.querySelector(".nav-toggle");
const closeIcon= document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
// recorre los links
menuItems.forEach(
  (menuItem) => (menuItem.addEventListener("click", toggleMenu))

)

//Validar formulario

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

console.log(nombre)

// the operator !! can be used to quickly convert the result of an expresion into a boolean true or false.

nombre.isValid = () => !!nombre.value;
email.isValid = () => validEmail(email.value);
subject.isValid = () => !!subject.value;
message.isValid = () => !!message.value;


const inputFields = [nombre, email, subject, message];
// console.log(inputFields)


const validEmail = (email) => {

  const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(String(email).toLocaleLowerCase());

};

let shouldValidate = false;
let isFormValid = false;


const inputCheck = function(){

    if (!shouldValidate) return;

    isFormValid = true;

    inputFields.forEach((input) => {
      input.classList.remove("invalid");
      input.nextElementSibling.classList.add("hide");

      if (!input.isValid()) {
        input.classList.add("invalid");
        isFormValid = false;
        input.nextElementSibling.classList.remove("hide");
      }
    });

}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  inputCheck();
  if (isFormValid) {
    alert("Gracias por comunicarse, en breve responderemos a su consulta.")
    location.href ="index.html";
  }
});

inputFields.forEach((input) => input.addEventListener("input", inputCheck));



