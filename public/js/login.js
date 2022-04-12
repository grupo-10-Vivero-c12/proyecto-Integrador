window.addEventListener("load", function (){

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  email:  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
  password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/
}

const validarFormulario = (e) => {
   switch (e.target.name){
      case "email":
         validarCampo(expresiones.email, e.target, 'email2');
      break;
      case "password":
         validarCampo(expresiones.password, e.target, 'password');
      break;
   }
}

const validarCampo = (expresion, input, campo) => {
   if(expresion.test(input.value)){
      document.getElementById(`${campo}`).classList.remove('is-invalid');
      document.getElementById(`${campo}`).classList.add('is-valid');
      document.querySelector(`#${campo} i`).classList.add('fa-check-circle');
      document.querySelector(`#${campo} i`).classList.remove('fa-times-circle');
      document.querySelector(`#${campo} .error-message`).classList.remove('error-message-activo')
   }else{
      document.getElementById(`${campo}`).classList.add('is-invalid');
      document.getElementById(`${campo}`).classList.remove('is-valid');
      document.querySelector(`#${campo} i`).classList.add('fa-check-circle');
      document.querySelector(`#${campo} i`).classList.remove('fa-times-circle');
      document.querySelector(`#${campo} p`).classList.add('error-message-activo');
      
   }
}

inputs.forEach((input) => {
   input.addEventListener('keyup', validarFormulario);
   input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {  //submit cuando presione click me va a enviar el formulario
    e.preventDefault();
  }) 
})
    