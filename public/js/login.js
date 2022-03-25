window.addEventListener('load', function() {
let $inputPass = document.querySelectorAll('.input-pass')
let form = document.querySelector('.form');
let currentPassword = document.querySelectorAll('.password');
let $button = document.querySelector('#buttonSubmit')
console.log(form)

let validarPassword = document.getElementById('#password');
let p1 = document.getElementById('password1');
let p2 = document.getElementById('password2');


currentPassword.addEventListener('check', function(event) {
    event.preventDefault();
        if(password.length < 6 ){ 
           value.remove('valid').add('invalid');
                
        }else {
            password.remove('invalid').add('valid');
        }

        if(password.matches([A-z])){
           password.remove('invalid').add('valid');
        } else {
           password.remove('valid').add('invalid');
        }
        if(password.matches([A-Z])){
            password.remove('invalid').add('valid');
         } else {
            password.remove('valid').add('invalid');
         }

         if( password.match(/\d/)){
            password.remove('invalid').add('valid');
         } else {
            password.remove('valid').add('invalid');
         }

         if (p1 != "" && p2 != ""){
            if (p1.length == 0 || p2.length == 0) {
                password.remove('valid').add('invalid');
              } else {
                password.remove('invalid').add('valid');
              }
         }

    })
    })

    alert('conectado')
    