import React from "react";
import { useParams } from "react-router-dom";
import Ratings from "../Ratings"
import "./content.css";

function Content({houses, rateNumber})
{
    const { id } = useParams();

    const accomodationData = houses.filter((product)=> product.id === id);

    return (
        <div className="contentContainer">
            <div className="contentInfo">
                {accomodationData.map((house)=>
                    <div className="pageTitle" key={house.id}>
                        <div className="countrytitle">
                            <h4 className="accomodationTitle">{house.title}</h4>
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
                            <img className="hostPicture" src={house.host.picture} alt={house.host.picture} />
                        </div>
                    )}
                </div>
                <Ratings rating={rateNumber} />
            </div>
        </div>
    )
}

export default Content;

