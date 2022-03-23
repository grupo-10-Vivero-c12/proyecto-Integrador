

// alert('conectado')
var email = document.getElementById('#email');
var password = document.getElementById('#password');
var button = document.querySelector('iniciar');
let form = document.querySelector('form')

button.addEventListener('blur', function(event) {
    let error = false
        if(password.value === "" ){
            console.log('El campo contraseña es obligatorio')
            error = true
            return false
          
        }else if(email.value === ""){
            console.log('El campo email es obligatorio')
            error = true
            return false;

        }else if(email.value.length > 40){
            error = true
            console.log('El email es demasiado largo')
            return
        }
       
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
})


    