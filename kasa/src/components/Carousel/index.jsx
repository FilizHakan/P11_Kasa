import React, {useState} from "react";
import "./carousel.css";
import arrowRight from "../../assets/arrowRight";
import arrowLeft from "../../assets/arrowLeft";

function Carousel({ images })
{
    const [currentImage, setCurrent] = useState(0);
    const allImages = images.length;
    const prev = () => 
    {
        setCurrent(currentImage === 0 ? allImages -1 : currentImage -1);
    }

    const next = () =>
    {
        setCurrent(currentImage === allImages - 1 ? 0 : currentImage + 1)
    }

    // If more than one image
    if(allImages > 1)
    {
        return (
        <div className="carousel">
            <button onClick={(prev)}>
            <img className="carousel__arrow--left" src={arrowLeft} alt="Precedent"/>
            </button>
            <img className="carousel__img" src={images[currentImage]} alt="Images"/>
            <button onClick={(next)}>
                <p className="carousel__index">{currentImage + 1}/{allImages}</p>
                <img className="carousel__arrow--right" src={arrowRight} alt="Suivant"/>
            </button>
        </div>
        );

    } else
    {   // if one image: classic display
        return(
            <div className="carousel">
                <img className="carousel__img" src={images[currentImage]} alt="Images"/>
                <p className="carousel__index">1/1</p>
            </div>
        )
    }

}