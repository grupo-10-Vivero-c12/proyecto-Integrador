window.addEventListener('load',()=>{
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    let $form = document.querySelector('#formPass')


    let password = document.querySelector('#password'),
    newPassword = document.querySelector('#newPassword'),
    confiPassword = document.querySelector('#confiPassword')

    let messagePassowrd = document.querySelector('#message-password'),
    messagePassowrd2 = document.querySelector('#message-password2'),
    messagePassowrd3 = document.querySelector('#message-password3'),
    messagePassowrd4 = document.querySelector('#message-password4'),
    messagePassowrd5 = document.querySelector('#message-password5')
    
    let passMessage = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número.';


    let errorPass = [false,false,false]
    // 1_password, 2_newPassword, 3_confiPassword
    
    password.addEventListener('blur',()=>{
        switch (true) {
            case !password.value.trim():
                messagePassowrd.classList.remove('ds-none')
                password.classList.add('is-invalid')
                messagePassowrd.innerText = "Ingrese una contraseña"
                errorPass[0] = true
                break;
            case !regExPass.test(password.value.trim()):
                messagePassowrd.classList.remove('ds-none')
                password.classList.add('is-invalid')
                messagePassowrd.innerText = passMessage
                errorPass[0] = true
                break;
            default:
                messagePassowrd.classList.add('ds-none')
                password.classList.remove('is-invalid')
                errorPass[0] = false
                break;
        }
    })

    newPassword.addEventListener('blur',()=>{
        switch (true) {
            case !newPassword.value.trim():
                messagePassowrd2.classList.remove('ds-none')
                newPassword.classList.add('is-invalid')
                messagePassowrd2.innerText = "Ingrese una contraseña"
                errorPass[1] = true
                break;
            case !regExPass.test(newPassword.value.trim()):
                messagePassowrd2.classList.remove('ds-none')
                newPassword.classList.add('is-invalid')
                messagePassowrd2.innerText = passMessage
                errorPass[1] = true
                break;
            case confiPassword.value.trim() !== newPassword.value.trim():
                if (confiPassword.value.trim()) {
                    messagePassowrd4.classList.remove('ds-none')
                    newPassword.classList.add('is-invalid')
                    messagePassowrd4.innerText = "Las contraseñas no coinciden."
                    errorPass[1] = true
                    break;
                }else {
                    messagePassowrd2.classList.add('ds-none')
                    messagePassowrd4.classList.add('ds-none')
                    newPassword.classList.remove('is-invalid')
                    errorPass[1] = false
                }
               
            default:
                messagePassowrd2.classList.add('ds-none')
                messagePassowrd4.classList.add('ds-none')
                newPassword.classList.remove('is-invalid')
                errorPass[1] = false
                break;
        }
    })
    confiPassword.addEventListener('blur',()=>{
        switch (true) {
            case !confiPassword.value.trim():
                messagePassowrd3.classList.remove('ds-none')
                confiPassword.classList.add('is-invalid')
                messagePassowrd3.innerText = "Ingrese una contraseña."
                errorPass[2] = true
                break;
            case !regExPass.test(confiPassword.value.trim()):
                messagePassowrd3.classList.remove('ds-none')
                confiPassword.classList.add('is-invalid')
                messagePassowrd3.innerText = passMessage
                errorPass[2] = true
                break;
            case confiPassword.value.trim() !== newPassword.value.trim():
                messagePassowrd3.classList.remove('ds-none')
                confiPassword.classList.add('is-invalid')
                messagePassowrd3.innerText = "Las contraseñas no coinciden."
                errorPass[2] = true
                break;
            default:
                messagePassowrd3.classList.add('ds-none')
                confiPassword.classList.remove('is-invalid')
                errorPass[2] = false
                break;
        }
    })

    $form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let formElements = $form.elements
        let error2 = false
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].value === "" && formElements[i].type !== "submit") {
                error2 = true
                formElements[i].classList.add('is-invalid')
                messagePassowrd5.classList.remove('ds-none')
                messagePassowrd5.innerText = "Completa los campos requeridos"
            }
            
        }
        if (!errorPass.includes(true) && !error2) {
            $form.submit()
        } 
    })
})


// Validation Form data user
window.addEventListener('load', ()=>{
    let regExAlphaNumeric = /^[a-zA-Z\sñÑáÁéÉíÍóÓúÚü1234567890., ]*$/,
    regExAlpha = /^[a-zA-Z\sñÑáÁéÉíÍóÓúÚü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExNumber = /^[0-9]{1,50}$/,
    regExPhone = /^[0-9]{7,10}$/,
    regExCp = /^[0-9]{1,4}$/,
    regExAge = /^[0-9]{1,3}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    let $form2 = document.querySelector('#form-data')


    let name = document.querySelector('#inputName'),
    last_name = document.querySelector('#last_name'),
    email = document.querySelector('#email'),
    last_email = document.querySelector('#last_email'),
    address = document.querySelector('#address'),
    phone = document.querySelector('#phone'),
    cp = document.querySelector('#cp'),
    country = document.querySelector('#country'),
    province = document.querySelector('#province'),
    date = document.querySelector('#date'),
    age = document.querySelector('#age')
    

    let messageName = document.querySelector('#error-name'),
    messageLastName = document.querySelector('#error-last-name'),
    messageEmail = document.querySelector('#error-email'),
    messageAddress = document.querySelector('#error-address'),
    messagePhone = document.querySelector('#error-phone'),
    messageCp = document.querySelector('#error-cp'),
    messageAge = document.querySelector('#error-age'),
    messageCountry = document.querySelector('#error-country'),
    messageProvince = document.querySelector('#error-province'),
    messageDate = document.querySelector('#error-date'),
    messagesubmit = document.querySelector('#error-submit')



    let errorData = [false,false,false,false,false,false,false,false,false,false]
    //0_name, 1_last_name, 2_email, 3_address, 4_phone, 5_cp, 6_country, 7_province, 8_date, 9_age
    name.addEventListener('blur', ()=>{
        switch (true) {
            case !name.value.trim():
                name.classList.add('is-invalid')
                messageName.classList.remove('ds-none')
                messageName.innerText = "No puede estar vacio"
                errorData[0] = true
                break;
            case !regExAlpha.test(name.value.trim()):
                name.classList.add('is-invalid')
                messageName.classList.remove('ds-none')
                messageName.innerText = "Inserte un nombre valido"
                errorData[0] = true
                break;
            case name.value.length > 50 || name.value.length < 3 :
                name.classList.add('is-invalid')
                messageName.classList.remove('ds-none')
                messageName.innerText = "Un minimo de 3 caracteres y maximo 50 caracteres"
                errorData[0] = true
                break;
            default:
                name.classList.remove('is-invalid')
                messageName.classList.add('ds-none')
                errorData[0] = false
                break;
        }
    })

    last_name.addEventListener('blur', ()=>{
        switch (true) {
            case !last_name.value.trim():
                last_name.classList.add('is-invalid')
                messageLastName.classList.remove('ds-none')
                messageLastName.innerText = "No puede estar vacio"
                errorData[1] = true
                break;
            case !regExAlpha.test(last_name.value.trim()):
                last_name.classList.add('is-invalid')
                messageLastName.classList.remove('ds-none')
                messageLastName.innerText = "Inserte un nombre valido"
                errorData[1] = true
                break;
            case last_name.value.length > 50 || last_name.value.length < 3 :
                last_name.classList.add('is-invalid')
                messageLastName.classList.remove('ds-none')
                messageLastName.innerText = "Un minimo de 3 caracteres y maximo 50 caracteres"
                errorData[1] = true
                break;
            default:
                last_name.classList.remove('is-invalid')
                messageLastName.classList.add('ds-none')
                errorData[1] = false
                break;
        }
    })

    email.addEventListener('blur', ()=>{
        switch (true) {
            case !email.value.trim():
                email.classList.add('is-invalid')
                messageEmail.classList.remove('ds-none')
                messageEmail.innerText = "No puede estar vacio"
                errorData[2] = true
                break;
            case !regExEmail.test(email.value.trim()):
                email.classList.add('is-invalid')
                messageEmail.classList.remove('ds-none')
                messageEmail.innerText = "Inserte un email valido"
                errorData[2] = true
                break;
            case email.value.length > 50 || email.value.length < 7:
                email.classList.add('is-invalid')
                messageEmail.classList.remove('ds-none')
                messageEmail.innerText = "min: 7 caracteres y max: 50 caracteres"
                errorData[2] = true
                break;
            default:
                email.classList.remove('is-invalid')
                messageEmail.classList.add('ds-none')
                errorData[2] = false
                break;
        }
    })

    address.addEventListener('blur', ()=>{
        switch (true) {
            case !address.value.trim():
                address.classList.add('is-invalid')
                messageAddress.classList.remove('ds-none')
                messageAddress.innerText = "No puede estar vacio"
                errorData[3] = true
                break;
            case !regExAlphaNumeric.test(address.value.trim()):
                address.classList.add('is-invalid')
                messageAddress.classList.remove('ds-none')
                messageAddress.innerText = "Inserte una dirección valida"
                errorData[3] = true
                break;
            case address.value.length > 50 || address.value.length < 3:
                address.classList.add('is-invalid')
                messageAddress.classList.remove('ds-none')
                messageAddress.innerText = "min: 3 caracteres y max: 50 caracteres"
                errorData[3] = true
                break;
            default:
                address.classList.remove('is-invalid')
                messageAddress.classList.add('ds-none')
                errorData[3] = false
                break;
        }
    })
    phone.addEventListener('blur', ()=>{
        switch (true) {
            case !phone.value.trim():
                phone.classList.add('is-invalid')
                messagePhone.classList.remove('ds-none')
                messagePhone.innerText = "No puede estar vacio"
                errorData[4] = true
                break;
            case !regExPhone.test(phone.value.trim()):
                phone.classList.add('is-invalid')
                messagePhone.classList.remove('ds-none')
                messagePhone.innerText = "Inserte un número valido"
                errorData[4] = true
                break;
            case phone.value.length > 50 || phone.value.length < 3:
                phone.classList.add('is-invalid')
                messagePhone.classList.remove('ds-none')
                messagePhone.innerText = "min: 3 caracteres y max: 20 caracteres"
                errorData[4] = true
                break;
            default:
                phone.classList.remove('is-invalid')
                messagePhone.classList.add('ds-none')
                errorData[4] = false
                break;
        }
    })
    cp.addEventListener('blur', ()=>{
        switch (true) {
            case !cp.value.trim():
                cp.classList.add('is-invalid')
                messageCp.classList.remove('ds-none')
                messageCp.innerText = "No puede estar vacio"
                errorData[5] = true
                break;
            case !regExCp.test(cp.value.trim()):
                cp.classList.add('is-invalid')
                messageCp.classList.remove('ds-none')
                messageCp.innerText = "Inserte un número valido, max: 4 caracteres"
                errorData[5] = true
                break;
            default:
                cp.classList.remove('is-invalid')
                messageCp.classList.add('ds-none')
                errorData[5] = false
                break;
        }
    })
    province.addEventListener('blur', ()=>{
        switch (true) {
            case !province.value.trim():
                province.classList.add('is-invalid')
                messageProvince.classList.remove('ds-none')
                messageProvince.innerText = "No puede estar vacio"
                errorData[7] = true
                break;
            default:
                province.classList.remove('is-invalid')
                messageProvince.classList.add('ds-none')
                errorData[7] = false
                break;
        }
    })
 
    date.addEventListener('blur', ()=>{
        switch (true) {
            case !date.value.trim():
                date.classList.add('is-invalid')
                messageDate.classList.remove('ds-none')
                messageDate.innerText = "No puede estar vacio"
                errorData[8] = true
                break;
            case moment(date.value) > moment() :
                date.classList.add('is-invalid')
                messageDate.classList.remove('ds-none')
                messageDate.innerText = "Ingrese una fecha valida"
                errorData[8] = true
                break;
            default:
                date.classList.remove('is-invalid')
                messageDate.classList.add('ds-none')
                errorData[8] = false
                break;
        }
    })

    age.addEventListener('blur', ()=>{
        switch (true) {
            case !age.value.trim():
                age.classList.add('is-invalid')
                messageAge.classList.remove('ds-none')
                messageAge.innerText = "No puede estar vacio"
                errorData[9] = true
                break;
            case !regExAge.test(age.value.trim()):
                age.classList.add('is-invalid')
                messageAge.classList.remove('ds-none')
                messageAge.innerText = "Inserte un número valido, max: 4 caracteres"
                errorData[9] = true
                break;
            default:
                age.classList.remove('is-invalid')
                messageAge.classList.add('ds-none')
                errorData[9] = false
                break;
        }
    })
    $form2.addEventListener('submit', (e)=>{
        e.preventDefault()
        let formElements = $form2.elements
        let error2 = false
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].value === "" && formElements[i].type !== "submit") {
                error2 = true
                formElements[i].classList.add('is-invalid')
                messagesubmit.classList.remove('ds-none')
                messagesubmit.innerText = "Completa los campos requeridos"
            }
            
        }
        if (!errorData.includes(true) && !error2) {
            $form2.submit()
        } 
    })
})