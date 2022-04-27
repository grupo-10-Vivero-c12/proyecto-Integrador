import React, { useEffect, useState } from 'react';
import Loader from '../Load/Loader';
import Cardproduct from './CardProduct';

const Products = (props) => {
    const [products, setProducts] = useState([]);

    const apiCall = async () =>{
        try {
            let response = await fetch('https://vivero-timbo.onrender.com/apiv1')
            let resolve = await response.json()
            setProducts(resolve.data)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        apiCall()
    },[]);
    if (products.length > 0) {
        switch (true) {
            case props.order === "priceMay":
                products.sort(function(a, b) {
                    if (a.price < b.price) {
                    return 1;
                    }
                    if (a.price > b.price) {
                    return -1;
                    }
                    return 0;
                });
                break;
            case props.order === "priceMin":
                products.sort(function(a, b) {
                    if (a.price > b.price) {
                    return 1;
                    }
                    if (a.price < b.price) {
                    return -1;
                    }
                    return 0;
                });
                break;
            case props.order === "nameAsc":
                products.sort(function(a, b) {
                    if (a.name.toLowerCase().trim() > b.name.toLowerCase().trim()) {
                    return 1;
                    }
                    if (a.name.toLowerCase().trim() < b.name.toLowerCase().trim()) {
                    return -1;
                    }
                    return 0;
                });
                break;
            case props.order === "nameDesc":
                products.sort(function(a, b) {
                    if (a.name.toLowerCase().trim() < b.name.toLowerCase().trim()) {
                    return 1;
                    }
                    if (a.name.toLowerCase().trim() > b.name.toLowerCase().trim()) {
                    return -1;
                    }
                    return 0;
                });
                break;
            
            default:
                products.sort((a, b)=>{
                    return a.id - b.id
                })
                break;
        }
    }
   
    
    return (
        <section className="container-products">
            <h2>{props.title}</h2>
            <div className="products">
                {
                    products.length < 1 ? <Loader /> : products.map(product =>{
                        return <Cardproduct key={product.id + product.name} {...product}/>
                    })
                }

                
            </div>
        </section>
    );
}

export default Products;
