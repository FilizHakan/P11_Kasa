import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./carousel.css";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

function Carousel({houses})
{
    const { id } = useParams();

    const accoData = houses.filter((product)=> product.id === id);

    const [currentImage, setCurrent] = useState(0);

    const slides = accoData
        .map((slide)=> slide.pictures)
        .map((image)=> image = image.length);

    const prev = () => 
    {
        setCurrent(currentImage === 0 ? slides -1 : currentImage - 1);
    }

    const next = () =>
    {
        setCurrent(currentImage === slides - 1 ? 0 : currentImage + 1)
    }

    if (
        !Array.isArray(slides) 
        || slides.length <= 0)
    {
        return null;
    }

    // Manage if slider has more than one image or only one
    return (
    <div className="carouselContainer">
        <div className="carouselImage">
            {accoData.map((slide, index)=>
            {
                return slide.pictures.map((image, index)=> (
                    <div className={index === currentImage ? "activeSlides" : "slides"} key={index}
                    >{index === currentImage && 
                        <img src={image} alt={image} className="product" key={image}
                        />} 
                    </div>
                ))
            })}
            <p className="carouselIndex">{currentImage +1}/{slides[0]}</p>
            <div className="carouselMask"></div>
            {slides[0] !== 1 ? (
                <div className="arrows">
                    <img className="leftArrow" onClick={(prev)} src={arrowLeft} alt="Previous" />
                    <img className="rightArrow" onClick={(next)} src={arrowRight} alt="Next" />
                </div>
            ): null }
        </div>                   
    </div>
    );

}

export default Carousel;
