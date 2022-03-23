
var email = document.getElementById('#email');
var password = document.getElementById('#password');
var button = document.querySelector('iniciar');


button.addEventListener('blur', function(event) {
    event.preventDefault();
        if(password.value === "" ){
            console.log('El campo contraseña es obligatorio')
           
            return false
          
        }else if(email.value === ""){
            console.log('El campo email es obligatorio')
            return false;

        }else if(email.value.length > 40){
            console.log('El email es demasiado largo')
            return
        }
       
    })

    alert('conectado')
    