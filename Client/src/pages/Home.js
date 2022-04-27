import React from 'react';
import Carrousel from '../components/Carrousel/Carrousel';
import "../assets/home.css"
import Cardcategorie from '../components/Categories/CardCategorie';
import Products from '../components/Products/Products';
const Home = () => {
    let data = [
        {
            id : 1,
            nombre : "Macetas",
            img : "cat-macetitas.png",
            desc : "Rusticas,Lisas y Con Anillos"
        },
        {
            id : 2,
            nombre : "Semillas",
            img : "cat-semillas.png",
            desc : "De diversas plantas y flores"
        },
        {   
            id : 3,
            nombre : "Plantas",
            img : "cat-plantas.jpeg",
            desc : "Interior, Esterior, Florales, Arbustos, Aromaticas y Catus"
        }
    ]
    return (
        <div className="home">
            <Carrousel />
            <section className="conteinerProduct">
                {
                    data.map(cat =>{
                        return <Cardcategorie key={cat.id + cat.nombre} {...cat} />
                    })
                }
            </section>
            <Products title={"PRODUCTOS"} />
        </div>
    );
}

export default Home;
