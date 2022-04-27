import React, { useState } from 'react';
import Products from '../components/Products/Products';
import '../assets/allProducts.css'
import LinkRoutes from '../components/Products/LinkRoutes';

const Listproducts = () => {

    const [order, setOrder] = useState('');

    const handleChange  = (e)=>{
        setOrder(e.target.value)
    }
    return (
        <div className='all-products'>
            <LinkRoutes />
            <div className="filter">
                <form action="/product" method="get">
                    <label htmlFor="filter">Ordenar por:</label>
                    <div className="select-container">
                        <select className="select" name="filter" id="filter" onChange={handleChange}>
                            <option value="" defaultValue={"Seleccionar filtro"}>Seleccionar Filtro</option>
                            <option value="priceMin">Menor precio</option>
                            <option value="priceMay">Mayor precio</option>
                            <option value="nameAsc">A - Z</option>
                            <option value="nameDesc">Z - A</option>
                        </select>
                    </div>

                </form>
            </div>
            <Products title={""} order={order}/>
        </div>
    );
}

export default Listproducts;

