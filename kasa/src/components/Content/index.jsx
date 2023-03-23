import React from "react";
import { useParams } from "react-router-dom";
import Ratings from "../Ratings"
import "./content.css";

function Content({houses})
{
    const { id } = useParams();

    const accomodationData = houses.filter((product)=> product.id === id);
    const ratingStars = accomodationData.map((el) => el.rating);
    
    return (
        <div className="contentContainer">
            <div className="contentInfo">
                {accomodationData.map((house)=>
                    <div className="pageTitle" key={house.id}>
                        <div className="countrytitle">
                            <h1 className="accomodationTitle">{house.title}</h1>
                            <p className="city">{house.location}</p>
                        </div>
                        <div className="tags">
                            <ul className="tagLists">
                                {accomodationData.map(({tags})=>
                                {
                                    return tags.map((tag)=>
                                    {
                                        return (
                                            <li className="tagName" key={tag}>{tag}</li>
                                        )
                                    })
                                })}
                            </ul>
                        </div>
                    </div>
                )}
                <div className="hostContainer">
                    {accomodationData.map((house)=>
                        <div className="hostInfo" key={house.host.name}>
                            <p className="hostName">{house.host.name}</p>
                            <div>    
                                <img className="hostPicture" src={house.host.picture} alt={house.host.picture} />
                            </div>
                        </div>
                    )}
                    <Ratings rating={ratingStars} />
                </div>
            </div>
        </div>
    )
}

export default Content;

