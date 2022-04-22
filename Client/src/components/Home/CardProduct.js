import React from 'react';

const Cardproduct = (props) => {
    console.log(props)
    return (
        <div className="product-related">
            <div className="image-product">
                <a href={`/product/detail/${props.id}`} ><img src={`images/products/${props.images}`} alt="" /></a>
            </div>
            <div className="description-product">
                <a href={`/product/detail/${props.id}`}><p> product.name </p></a>
                <p>$ toThousand(product.price) </p>
                <button className="btn">Comprar</button>
            </div>
        </div>
    );
}

export default Cardproduct;
