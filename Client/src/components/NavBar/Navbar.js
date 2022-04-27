import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import logo from './Logo.png'

const Navbar = () => {
    
    let data = JSON.parse(sessionStorage.getItem('user'))
    // sessionStorage.setItem('user', JSON.stringify(data))
    // JSON.parse(sessionStorage.getItem('user'))
    // sessionStorage.setItem('user', JSON.stringify({id : 1, name : "Marcos Britos", rol : 1}))
    const [session, setSession] = useState(data);
    let burgerMenu = useRef()
    let navMobile = useRef()
    let userIcon;
    let menuUser;
    let menuMobile;


    useEffect(() => {
        if (sessionStorage.getItem('user') !== null) {
            setSession(JSON.parse(sessionStorage.getItem('user')))
        }
    }, []);

    
    if (session === null) {
        userIcon = <a href="/users/login"><i className="far fa-user-circle"></i></a>
    } else {
        userIcon = <a className="avatar" href="/users/profile/session.id">
            <div className="avatar-img">
                <img src="/images/users/session.avatar" alt="imagen de perfil" />
                <span className="session"></span>
            </div>
        </a>
        menuUser = <div className="menu-user">
            <a href="/users/profile/session.id">Mis datos</a>
            <a href="/users/logout">Cerrar sesión</a>
            {session.rol === 1 ? <a href="/admin">Administrador</a> : ""}

        </div>
        menuMobile = <div className="menu-user-mobile">
                        <hr />
                        <a href="/users/profile/<%= session.user.id %>">Mis datos</a>
                        <a href="/users/logout">Cerrar sesión</a>
                        
                        {session.rol === 1 ? <a href="/admin">Administrador</a> : ""}

                    </div>
       
    }

    let displayMenu = () =>{
        if (navMobile.current.style.display === "block") {
            navMobile.current.style.display = "none"
        } else {
            navMobile.current.style.display = "block"
        }
    }
    

    return (
        <div className="header">
            <div className="content">
                <header className="main-header">
                    <div className="burger_menu" ref={burgerMenu} onClick={displayMenu} >
                        <i className="fas fa-bars"></i>
                    </div>

                    <div className="logo_container">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <nav className="navbar_main_header">
                        <ul>
                            
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/products">Productos</Link></li>
                            <li><Link to="/locals">Locales</Link></li>
                            <li><Link to="/frequent-questions">Preguntas frecuentes</Link></li>
                        </ul>
                    </nav>


                    <div className="search">
                        <form action="/product/search" method="get">
                            <input type="text" name="search" id="search" placeholder="Buscar" />
                            <button>
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <nav className="user_navbar">
                        {userIcon}
                        {menuUser}
                        { !session ? "" : <a href="/shoppingCart"><i className="fas fa-shopping-cart"></i></a>}
    
                    </nav>
                </header>
            </div>

            <nav className="navbar_mobile">
                <div className="nav-contain" ref={navMobile}>
                    <hr />
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/product">Productos</Link></li>
                        <li><Link to="/locals">Locales</Link></li>
                        <li><Link to="/frequent-questions">Preguntas frecuentes</Link></li>
                    </ul>
                    <div className="search-mobile">
                        <form action="/product/search" method="get">
                            <input type="text" name="search" id="search" placeholder="Buscar" />
                            <button className="button-favicon">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                   {menuMobile}

                </div>

            </nav>

        </div>
    );
}


export default Navbar;
