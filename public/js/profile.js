window.onload = ()=>{
    let $name = document.querySelector('#inputName')
    let $editar = document.querySelector('#edit')
    let $inputs = document.querySelectorAll('.input-js')
    let $button = document.querySelector('#buttonSubmit')
    
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

    
}