window.addEventListener('load', function() {

var form = document.querySelector('.formContainer');
var email = document.getElementById('#email');
var password = document.getElementById('#password');
var p1 = document.getElementById('password1');
var p2 = document.getElementById('password2');


form.addEventListener('value', function(event) {
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
    