window.addEventListener('load', () => {
    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    let divProducts = document.querySelector('#box-container')
    let navUser = document.querySelector('.user_navbar')
    let navUserMobile = document.querySelector('#nav-mobile')
    console.log(navUser)

    let apiCall = async () => {
        try {
            let response = await fetch('http://localhost:3000/apiv1/')
            let result = await response.json()
            return result
        } catch (error) {
            console.log(error)
        }
    }

    let imprimir = async () => {
        let result = await apiCall()
        if (result) {
            result.data.forEach(item => {
                divProducts.innerHTML += `<div class="product-related">
                <div class="image-product">
                    <a href="/product/detail/${item.id}"><img src="public/images/products/${item.images}"
                            alt=""></a>
                </div>
                <div class="description-product">
                    <a href="/product/detail/${item.id}">
                        <p>${item.name}</p>
                    </a>
                    <p>$${toThousand(item.price)}</p>
                    <button class="btn">Comprar</button>
                </div>
            </div>`
            });
        } else {
            console.log('error al mostrar los productos')
        }

    }

    imprimir()
    let datos = {
        id: 1,
        user : 1,
        rol : 1,
        avatar : "1648169328979_img_.jpg"
    }
    sessionStorage.setItem('user', JSON.stringify(datos))

    let user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    if (!sessionStorage.user) {
        navUser.innerHTML += '<a href="/users/login"><i class="far fa-user-circle"></i></a>'
    } else {
        navUser.innerHTML += `<a class="avatar" href="/users/profile/${user.id}">
        <div class="avatar-img">
            <img src="public/images/users/${user.avatar}" alt="imagen de perfil">
            <span class="session"></span>
        </div>
        </a>

        <div class="menu-user">
            <a href="/users/profile/${user.id}">Mis datos</a>
            <a href="/users/logout">Cerrar sesión</a>
        ${user.rol === 1 ? '<a href="/admin">Administrador</a>' : ""}
        </div>

        <a href="/shoppingCart"><i class="fas fa-shopping-cart"></i></a>`

        navUserMobile.innerHTML += `<div class="menu-user-mobile">
                <hr>
                <a href="/users/profile/${user.id}">Mis datos</a>
                <a href="/users/logout">Cerrar sesión</a>
                ${user.rol === 1 ? '<a href="/admin">Administrador</a>' : ""}
                </div>`


    }

})