window.addEventListener('load', ()=>{
    let navMobile = document.querySelector('.nav-contain')
    let burger = document.querySelector('.burger_menu')
    burger.addEventListener('click', ()=>{
        if (navMobile.style.display === "block") {
            navMobile.style.display = "none"
        } else {
            navMobile.style.display = "block"
        }
        
    })

    
})