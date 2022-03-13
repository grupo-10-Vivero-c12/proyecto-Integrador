window.addEventListener('load', ()=>{
    let $inputPass = document.querySelectorAll('.input-pass')
    let $editar = document.querySelector('#edit')
    let $inputs = document.querySelectorAll('.input-js')
    let $button = document.querySelector('#buttonSubmit')
    let changePassowrd = document.querySelector('#change-password')
    let $btnH5 = document.querySelector('#btn-change-password')
    let updateFile = document.querySelector('#file')
    let btnSubmitFile = document.querySelector('#submitFile')
    
    btnSubmitFile.style.display = "none"

    for (let i = 0; i < $inputs.length; i++) {
        if ($inputs[i].classList.contains('is-invalid')) {
            for (let i = 0; i < $inputs.length; i++) {
                $editar.style.display = "none"
                $inputs[i].disabled = false
                $inputs[i].style.color = "black"
                $button.style.display = "block"
            } 
            break
        } 
    } 
    
    for (let i = 0; i < $inputPass.length; i++) {
        if ($inputPass[i].classList.contains('is-invalid')) {
            changePassowrd.classList.toggle('ds-block')
            break
        } 
    } 


    $editar.addEventListener('click', ()=>{
        if ($editar.innerText.toLowerCase() === "editar") {
            for (let i = 0; i < $inputs.length; i++) {
                $editar.style.display = "none"
                $inputs[i].disabled = false
                $inputs[i].style.color = "black"
                $button.style.display = "block"
            } 
        } else if($editar.innerText.toLowerCase() === "guardar") {
            for (let i = 0; i < $inputs.length; i++) {
                $inputs[i].disabled = true
                $inputs[i].style.color = "rgb(143, 143, 143)"
            } 
        }
        
    })


    $btnH5.addEventListener('click', ()=>{
        changePassowrd.classList.toggle('ds-block')
    })

    updateFile.addEventListener('change', ()=>{
        btnSubmitFile.style.display = "inline"
    })
    
    

    
})