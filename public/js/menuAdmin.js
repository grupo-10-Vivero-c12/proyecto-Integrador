let btnMenu = document.querySelector("#navigation-bar-mobile");
let btnProduct = document.querySelector('#btn-product')
let btnUsers = document.querySelector('#btn-user')


function dropMenu(){
    if (btnMenu.style.display === "block"){
        btnMenu.style.display = "none";
        
    } else{
        btnMenu.style.display = "block";
        btnProduct.style.display = "none"
        btnUsers.style.display = "none"
    }
}


function dropSubCategory1(){
    if (btnProduct.style.display === "block"){
        btnProduct.style.display = "none";
    } else{
        btnProduct.style.display = "block";
    }
}

function dropSubCategory2(){
    if (btnUsers.style.display === "block"){
        btnUsers.style.display = "none";
    } else{
        btnUsers.style.display = "block";
    }
}
