let btnMenu = document.querySelector("#navigation-bar-mobile");
let btnProduct = document.querySelector('#btn-product')
let btnUsers = document.querySelector('#btn-user')
let btnProductDekstop = document.querySelector('#btn-product-desktop');
let btnUserDekstop = document.querySelector('#btn-user-desktop');
let arrowProduct = document.querySelector('#arrow-product');
let arrowUser = document.querySelector('#arrow-user');
let btnDrop = document.querySelector('#btn-drop');
let btnDrop2 = document.querySelector('#btn-drop2');


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

function dropSubCategory3(){
    if(btnProductDekstop.style.top === "-1px"){
        btnProductDekstop.style.top = "58px";
        arrowProduct.style.transform= "rotate(-180deg)";
        btnDrop.style.backgroundColor = "#e0d678";
        if(btnUserDekstop.style.top === "58px"){
            btnUserDekstop.style.top = "-1px"
            arrowUser.style.transform= "rotate(0deg)";
            btnDrop2.style.backgroundColor = "#c5b523";
        }
    } else{
        btnProductDekstop.style.top = "-1px";
        arrowProduct.style.transform= "rotate(0deg)";
        btnDrop.style.backgroundColor = "#c5b523";
    } 
}

function dropSubCategory4(){
    if(btnUserDekstop.style.top === "-1px"){
        btnUserDekstop.style.top = "58px";
        arrowUser.style.transform= "rotate(-180deg)";
        btnDrop2.style.backgroundColor = "#e0d678";
        if(btnProductDekstop.style.top === "58px"){
            btnProductDekstop.style.top = "-1px";
            arrowProduct.style.transform = "rotate(0deg)";
            btnDrop.style.backgroundColor = "#c5b523";
        }
    } else{
        btnUserDekstop.style.top = "-1px";
        arrowUser.style.transform= "rotate(0deg)";
        btnDrop2.style.backgroundColor = "#c5b523";
    } 
    
}



/* EVENTOS CATEGORIAS */

let editBtn = document.querySelector("#form-drop-edit")
let addBtn = document.querySelector("#form-drop-add")

function editButtonDrop(){
    if (editBtn.style.display === "block"){
        editBtn.style.display = "none";
        
    } else{
        editBtn.style.display = "block";
    }
}



function addButtonDrop(){
    if (addBtn.style.display === "block"){
        addBtn.style.display = "none";
    } else{
        addBtn.style.display = "block";
    }
}
const changeRol = async (id, rol) => {

    try {
  
      let response = await fetch(`/admin/permission`,{
          headers : {
              'content-type' : 'application/json'
          },
          method : 'POST',
          body : JSON.stringify({
              id,
              rol
          }),
      });
      let result = await response.json();
  
    
  
  } catch (error) {
  
  }
  
  }