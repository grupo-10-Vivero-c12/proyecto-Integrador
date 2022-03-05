window.onload = ()=>{
    let $form = document.querySelector('form')
    let $inputName = document.querySelector('#name')
    let $inputDescription = document.querySelector('#des')
    let $inputLocation = document.querySelector('#ubi')
    let $inputSustratum = document.querySelector('#sus')
    let $inputFlowering = document.querySelector('#flo')
    let $inputImage = document.querySelector('#img')
    let $selectCategory = document.querySelector('#category')
    let $inputColor = document.querySelector('#color')
    let $inputPrice = document.querySelector('#price')
    let $inputStock = document.querySelector('#cant')
    let countName = document.querySelector('#count')
    let errorName = document.querySelector('#message-name'),
    errorDescription = document.querySelector('#message-description'),
    errorLocation = document.querySelector('#message-location'),
    errorSustratum = document.querySelector('#message-sustratum'),
    errorFlowering = document.querySelector('#message-flowering'),
    errorImage = document.querySelector('#message-image'),
    errorCategory = document.querySelector('#message-category'),
    errorColor = document.querySelector('#message-color'),
    errorPrice = document.querySelector('#message-price'),
    errorStock = document.querySelector('#message-stock'),
    submitError = document.querySelector('#submitError')

    let regExAlphaNumeric = /^[a-zA-Z\sñáéíóúü1234567890., ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExNumber = /^[0-9]{1,50}$/,
    regExPhone = /^[0-9]{8,10}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    let chargerErrorName = false,
    chargerErrorDescription = false,
    chargerErrorLocation = false,
    chargerErrorFlowering = false,
    chargerErrorSustratum = false,
    chargerErrorCategory = false,
    chargerErrorColor = false,
    chargerErrorPrice = false,
    chargerErrorStock = false

    $inputName.addEventListener('blur', ()=>{
        switch (true) {
            case !$inputName.value.trim():
                errorName.classList.remove('ds-none')
                $inputName.classList.add('is-invalid')
                errorName.innerText = 'No puede estar vacio'
                chargerErrorName = true
                break;
            case !regExAlphaNumeric.test($inputName.value.trim()):
                errorName.classList.remove('ds-none')
                $inputName.classList.add('is-invalid')
                errorName.innerText = 'No se puede ingresar caracteres especiales'
                chargerErrorName = true
                break;
            case $inputName.value.trim().length > 50:
                errorName.classList.remove('ds-none')
                $inputName.classList.add('is-invalid')
                errorName.innerText = 'Un maximo de 50 caracteres'
                chargerErrorName = true
                break;
            default:
                errorName.classList.add('ds-none')
                $inputName.classList.remove('is-invalid')
                $inputName.classList.add('is-valid')
                chargerErrorName = false
                break;
        }
    })
    
    $inputDescription.addEventListener('blur', ()=>{
        switch (true) {
            case !$inputDescription.value.trim():
                errorDescription.classList.remove('ds-none')
                $inputDescription.classList.add('is-invalid')
                countName.innerText = $inputDescription.value.length 
                errorDescription.innerText = 'No puede estar vacio'
                chargerErrorDescription = true
                break;
            case !regExAlphaNumeric.test($inputDescription.value.trim()):
                errorDescription.classList.remove('ds-none')
                $inputDescription.classList.add('is-invalid')
                errorDescription.innerText = 'No se puede ingresar caracteres especiales'
                chargerErrorDescription = true
                break;
            case $inputDescription.value.trim().length > 300:
                errorDescription.classList.remove('ds-none')
                $inputDescription.classList.add('is-invalid')
                errorDescription.innerText = 'Un maximo de 300 caracteres'
                chargerErrorDescription = true
                break;
            default:
                errorDescription.classList.add('ds-none')
                $inputDescription.classList.remove('is-invalid')
                $inputDescription.classList.add('is-valid')
                chargerErrorDescription = false
                break;
        }
    })

    $inputDescription.addEventListener('keypress', (e)=>{
        countName.innerText = e.target.value.length + 1
       
    })

    $inputLocation.addEventListener('blur', ()=>{
        switch (true) {
            case !$inputLocation.value.trim():
                errorLocation.classList.remove('ds-none')
                $inputLocation.classList.add('is-invalid')
                errorLocation.innerText = 'No puede estar vacio'
                chargerErrorLocation = true
                break;
            case !regExAlphaNumeric.test($inputLocation.value.trim()):
                errorLocation.classList.remove('ds-none')
                $inputLocation.classList.add('is-invalid')
                errorLocation.innerText = 'No se puede ingresar caracteres especiales'
                chargerErrorLocation = true
                break;
            case $inputLocation.value.trim().length > 300:
                errorLocation.classList.remove('ds-none')
                $inputLocation.classList.add('is-invalid')
                errorLocation.innerText = 'Un maximo de 300 caracteres'
                chargerErrorLocation = true
                break;
            default:
                errorLocation.classList.add('ds-none')
                $inputLocation.classList.remove('is-invalid')
                $inputLocation.classList.add('is-valid')
                chargerErrorLocation = false
                break;
        }
    })

    $inputSustratum.addEventListener('blur', ()=>{
        switch (true) {
            case !$inputSustratum.value.trim():
                errorSustratum.classList.remove('ds-none')
                $inputSustratum.classList.add('is-invalid')
                errorSustratum.innerText = 'No puede estar vacio'
                chargerErrorSustratum = true
                break;
            case !regExAlphaNumeric.test($inputSustratum.value.trim()):
                errorSustratum.classList.remove('ds-none')
                $inputSustratum.classList.add('is-invalid')
                errorSustratum.innerText = 'No se puede ingresar caracteres especiales'
                chargerErrorSustratum = true
                break;
            case $inputSustratum.value.trim().length > 300:
                errorSustratum.classList.remove('ds-none')
                $inputSustratum.classList.add('is-invalid')
                errorSustratum.innerText = 'Un maximo de 300 caracteres'
                chargerErrorSustratum = true
                break;
            default:
                errorSustratum.classList.add('ds-none')
                $inputSustratum.classList.remove('is-invalid')
                $inputSustratum.classList.add('is-valid')
                chargerErrorSustratum = false
                break;
        }
    })
    $inputFlowering.addEventListener('blur', ()=>{
        switch (true) {
            case !$inputFlowering.value.trim():
                errorFlowering.classList.remove('ds-none')
                $inputFlowering.classList.add('is-invalid')
                errorFlowering.innerText = 'No puede estar vacio'
                chargerErrorFlowering = true
                break;
            case !regExAlphaNumeric.test($inputFlowering.value.trim()):
                errorFlowering.classList.remove('ds-none')
                $inputFlowering.classList.add('is-invalid')
                errorFlowering.innerText = 'No se puede ingresar caracteres especiales'
                chargerErrorFlowering = true
                break;
            case $inputFlowering.value.trim().length > 300:
                errorFlowering.classList.remove('ds-none')
                $inputFlowering.classList.add('is-invalid')
                errorFlowering.innerText = 'Un maximo de 300 caracteres'
                chargerErrorFlowering = true
                break;
            default:
                errorFlowering.classList.add('ds-none')
                $inputFlowering.classList.remove('is-invalid')
                $inputFlowering.classList.add('is-valid')
                chargerErrorFlowering = false
                break;
        }
    })

    $selectCategory.addEventListener('blur', ()=>{
        switch (true) {
            case !$selectCategory.value.trim():
                errorCategory.classList.remove('ds-none')
                $selectCategory.classList.add('is-invalid')
                errorCategory.innerText = 'No puede estar vacio'
                chargerErrorCategory = true
                break;
            case !regExAlphaNumeric.test($selectCategory.value.trim()):
                errorCategory.classList.remove('ds-none')
                $selectCategory.classList.add('is-invalid')
                errorCategory.innerText = 'No se puede ingresar caracteres especiales'
                chargerErrorCategory = true
                break;
            default:
                errorCategory.classList.add('ds-none')
                $selectCategory.classList.remove('is-invalid')
                $selectCategory.classList.add('is-valid')
                chargerErrorCategory = false
                break;
        }
    })

    $inputPrice.addEventListener('blur', ()=>{
        switch (true) {
            case !$inputPrice.value.trim():
                errorPrice.classList.remove('ds-none')
                $inputPrice.classList.add('is-invalid')
                errorPrice.innerText = 'No puede estar vacio'
                chargerErrorPrice = true
                break;
            case !regExNumber.test($inputPrice.value.trim()):
                errorPrice.classList.remove('ds-none')
                $inputPrice.classList.add('is-invalid')
                errorPrice.innerText = 'Maximo 50 caracteres'
                chargerErrorPrice = true
                break;
            case $inputPrice.value.trim().length > 50:
                errorPrice.classList.remove('ds-none')
                $inputPrice.classList.add('is-invalid')
                errorPrice.innerText = 'Un maximo de 50 caracteres'
                chargerErrorPrice = true
                break;
            default:
                errorPrice.classList.add('ds-none')
                $inputPrice.classList.remove('is-invalid')
                $inputPrice.classList.add('is-valid')
                chargerErrorPrice = false
                break;
        }
    })

    $inputStock.addEventListener('blur', ()=>{
        switch (true) {
            case !$inputStock.value.trim():
                errorStock.classList.remove('ds-none')
                $inputStock.classList.add('is-invalid')
                errorStock.innerText = 'No puede estar vacio'
                chargerErrorStock = true
                break;
            case !regExNumber.test($inputStock.value.trim()):
                errorStock.classList.remove('ds-none')
                $inputStock.classList.add('is-invalid')
                errorStock.innerText = 'Numero invalido. Max 50 caracteres'
                chargerErrorStock = true
                break;
            case $inputStock.value.trim().length > 50:
                errorStock.classList.remove('ds-none')
                $inputStock.classList.add('is-invalid')
                errorStock.innerText = 'Un maximo de 50 caracteres'
                chargerErrorStock = true
                break;
            default:
                errorStock.classList.add('ds-none')
                $inputStock.classList.remove('is-invalid')
                $inputStock.classList.add('is-valid')
                chargerErrorStock = false
                break;
        }
    })

    $inputColor.addEventListener('blur', ()=>{
        switch (true) {
            case !$inputColor.value.trim():
                errorColor.classList.remove('ds-none')
                $inputColor.classList.add('is-invalid')
                errorColor.innerText = 'No puede estar vacio'
                chargerErrorColor = true
                break;
            case !regExAlphaNumeric.test($inputColor.value.trim()):
                errorColor.classList.remove('ds-none')
                $inputColor.classList.add('is-invalid')
                errorColor.innerText = 'No se puede ingresar caracteres especiales'
                chargerErrorColor = true
                break;
            case $inputColor.value.trim().length > 300:
                errorColor.classList.remove('ds-none')
                $inputColor.classList.add('is-invalid')
                errorColor.innerText = 'Un maximo de 300 caracteres'
                chargerErrorColor = true
                break;
            default:
                errorColor.classList.add('ds-none')
                $inputColor.classList.remove('is-invalid')
                $inputColor.classList.add('is-valid')
                chargerErrorColor = false
                break;
        }
    })

    $form.addEventListener("submit", (e)=>{
        e.preventDefault()

        let elementsForm = $form.elements
        
        let error = false
        for (let i = 0; i < elementsForm.length; i++) {
            if (elementsForm[i].value == "" && elementsForm[i].type !== "file" && elementsForm[i].type !== "submit") {
                console.dir(elementsForm[i])
                submitError.classList.remove('ds-none')
                elementsForm[i].classList.add('is-invalid')
                submitError.innerText = 'Los campos señalados son obligatorios'
                error = true
            }
            
        }
        let chargerError = false
        if (chargerErrorName || chargerErrorDescription || chargerErrorLocation || chargerErrorFlowering 
            || chargerErrorSustratum || chargerErrorCategory || chargerErrorColor || chargerErrorPrice 
            || chargerErrorStock ) {
            // console.log('name'+chargerErrorName )
            // console.log('des'+chargerErrorDescription )
            // console.log('ubi'+chargerErrorLocation )
            // console.log('flo'+chargerErrorFlowering )
            // console.log('sus'+chargerErrorSustratum )
            // console.log('cate'+chargerErrorCategory )
            // console.log('colo'+chargerErrorColor )
            // console.log('pre'+chargerErrorPrice )
            // console.log('stoc'+chargerErrorStock )
            chargerError = true
            console.log('error en validacion')
        } else{
            chargerError = false
            console.log('esta todo bien')
        }

        if (!error && !chargerError) {
            console.log('paso por aca')
            $form.submit()
            
        }

    })
}

