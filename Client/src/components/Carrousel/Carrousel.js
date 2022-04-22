import React, { useEffect, useRef, useState } from 'react';
import "./carousel.css"
import 'animate.css';

const Carrousel = () => {
    let imageName = [
        {
            img : "/img/prueba1.vivero.jpg"
        },
        {
            img : "/img/prueba2.vivero.jpg"
        },
        {
            img : "/img/prueba3.vivero.jpg"
        },
    ] 
    const [linkImage, setlinkImage] = useState(imageName[0].img);
    const image = useRef()
    let n = 1

    let slideCarousel= ()=>{ 
        let largo = imageName.length 
        if (n > largo) { n = 1 };

        switch (true) {
            case n === 1:
                setlinkImage(imageName[0].img )
                break;
        
            case n === 2:
                setlinkImage(imageName[1].img )
                break;
        
            case n === 3:
                setlinkImage(imageName[2].img )
                break;
        
            default:
                break;
        }
        n = n + 1
        setTimeout(slideCarousel, 2000)
    }
    
    useEffect(() => {
        setTimeout(slideCarousel, 2000)

    }, []);

    return (
        <div className="slide-container" >
            <div className="slide fade " >
                <img className="fade"ref={image} src={linkImage} alt="" />
            </div>
        </div>

    );
}

export default Carrousel;
