import React from 'react';
import Contacts from './Contacts';
import Navfooter from './NavFooter';
import Social from './Social';
import "./footer.css"

const Contentfooter = () => {
    return (
        <footer className="footer">
            <div className="content">
                <div className="main_footer">
                    <Navfooter />
                    <Contacts />
                    <Social />
                    <p>© Todos los derechos reservados. Marca Registrada</p>
                </div>
            </div>
        </footer>
    );
}

export default Contentfooter;

