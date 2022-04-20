import React from 'react';

const Social = () => {
    return (
        <nav className="social">
            <h4>Redes Sociales</h4>
            <ul>
                <li><a href="https://api.whatsapp.com/send?phone=5491132331374&text=¡Hola!,%20Me%20gustaría%20solicitar%20más%20información"
                    target="_blank"><i className="fab fa-whatsapp"></i></a></li>
                <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a></li>
            </ul>
        </nav>
    );
}

export default Social;
