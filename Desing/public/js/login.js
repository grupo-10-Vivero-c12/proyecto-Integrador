window.addEventListener('load', ()=>{
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    let form = document.querySelector('.form-container form')
    let msgEmail = document.querySelector('#email-errors')
    let msgPass = document.querySelector('#pass-error')
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let passMessage = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número.';

    let errorAll = [false, false]

    password.addEventListener('blur',()=>{
        switch (true) {
            case !password.value.trim():
                password.classList.add('is-invalid')
                msgPass.innerText = "Ingrese una contraseña"
                errorAll[0] = true
                break;
            case !regExPass.test(password.value.trim()):
                password.classList.add('is-invalid')
                msgPass.innerText = passMessage
                errorAll[0] = true
                break;
            default:
                password.classList.remove('is-invalid')
                msgPass.innerText = ""
                errorAll[0] = false
                break;
        }
    })

    email.addEventListener('blur', ()=>{
        switch (true) {
            case !email.value.trim():
                email.classList.add('is-invalid')
                msgEmail.innerText = "No puede estar vacio"
                errorAll[1] = true
                break;
            case !regExEmail.test(email.value.trim()):
                email.classList.add('is-invalid')
                msgEmail.innerText = "Inserte un email valido"
                errorAll[1] = true
                break;
            case email.value.length > 50 || email.value.length < 7:
                email.classList.add('is-invalid')
                msgEmail.innerText = "min: 7 caracteres y max: 50 caracteres"
                errorAll[1]= true
                break;
            default:
                email.classList.remove('is-invalid')
                msgEmail.innerText = ""
                errorAll[1] = false
                break;
        }
    })

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let error = false  
        if (password.value === "" ){
            msgPass.innerText = 'El campo contraseña es obligatorio'
            error = true
        }
        if(email.value === ""){
            msgEmail.innerText ='El campo email es obligatorio'
            error = true
        }

        if (email.value.length > 40) {
            error = true
            msgEmail.innerText = 'El email es demasiado largo'
        }
        
        if (error === true || errorAll.includes(true)) {
            console.log('se corta')
            return
        } else {
            console.log('corre')
        }
    })

})


    