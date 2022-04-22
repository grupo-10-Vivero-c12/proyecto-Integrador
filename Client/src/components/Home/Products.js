import React, { useEffect, useState } from 'react';
import Cardproduct from './CardProduct';

const Products = () => {
    const [products, setProducts] = useState();

    const apiCall = async () =>{
        try {
            let response = await fetch('http://localhost:3001/apiv1')
            let resolve = await response.json()
            setProducts(resolve.data)
        } catch (error) {
            console.log(error)
        }
        
    }
    
    useEffect(() => {
        apiCall()
    }, []);


    return (
        <section className="container-products">
            <h2>PRODUCTOS</h2>
            <div className="products">
                {
                    products === undefined ? "" : products.map(product =>{
                        return <Cardproduct key={product.id + product.name} {...product}/>
                    })
                }
                
            </div>
        </section>
    );
}

export default Products;
