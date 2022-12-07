import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./carousel.css";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

function Carousel({ props })
{
    const { idAccomodation } = useParams();

    const accomodation = props.houses.find((product)=> product.id === idAccomodation);

    const [currentImage, setCurrent] = useState(0);

    const slides = accomodation
        .map((slide)=> slide.images)
        .map((image)=> image = image.length);

    const prev = () => 
    {
        setCurrent(currentImage === 0 ? slides -1 : currentImage -1);
    }

    const next = () =>
    {
        setCurrent(currentImage === slides - 1 ? 0 : currentImage + 1)
    }

    // Manage if slider has one image
    if (!Array.isArray(slides) || slides.length <= 0)
    {
        return null;
    }

    // Manage if slider has more than one image
    return (
    <div className="carouselContainer">
        <div className="carouselImage">\
            {accomodation.map((slide, index)=>
            {
                return slide.images.map((image, index)=> (
                    <div className={index === currentImage ? "activeSlides" : "slides"} key={index}
                    >{index === currentImage && 
                        <img src={image} alt={image} className="product" key={image} style={{width: `170%`,}}
                        />} 
                    </div>
                ))
            })}
            <p className="carouselIndex">{currentImage +1}/{slides[0]}</p>
            <div className="carouselMask"></div>
            {slides[0] !== 1 ? 
                <div className="arrows">
                    <img className="leftArrow" onClick={(prev)} src={arrowLeft} alt="Previous" />
                    <img className="rightArrow" onClick={(next)} src={arrowRight} alt="Next" />
                </div>
            : null }
        </div>                   
    </div>
    );

}

export default Carousel;
