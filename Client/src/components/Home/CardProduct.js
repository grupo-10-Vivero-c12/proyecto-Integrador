import React from 'react';

const Cardproduct = () => {
    return (
        <div class="product-related">
            <div class="image-product">
                <a href="/product/detail/<%= product.id %>"><img src="images/products/product.images" alt="" /></a>
            </div>
            <div class="description-product">
                <a href="/product/detail/<%= product.id %> "><p> product.name </p></a>
                <p>$ toThousand(product.price) </p>
                <button class="btn">Comprar</button>
            </div>
        </div>
    );
}

export default Cardproduct;
