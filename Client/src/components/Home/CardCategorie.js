import React from 'react';

const Cardcategorie = (props) => {
    
    return (
        <div className="categoriaMacetas">
            <img src= {`/img/${props.img}`} alt={props.nombre}/>
            <div className="data2">
                <a href={`/product/category/${props.id}`}><h2>{props.nombre}</h2></a>
                <span>{props.desc}</span>
            </div>
        </div>
    );
}

export default Cardcategorie;
