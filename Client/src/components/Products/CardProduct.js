import React from 'react';

const Cardproduct = (props) => {
    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return (
        <div className="product-related">
            <div className="image-product">
                <a href={`/product/detail/${props.id}`} ><img src={`images/products/${props.images}`} alt="" /></a>
            </div>
            <div className="description-product">
                <a href={`/product/detail/${props.id}`}><p> {props.name}</p></a>
                <p>${ toThousand(props.price)} </p>
                <button className="btn">Comprar</button>
            </div>
        </div>
    );
}

export default Cardproduct;
