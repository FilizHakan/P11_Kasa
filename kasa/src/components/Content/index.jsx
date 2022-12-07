import React from "react";
import { useParams } from "react-router-dom";
import fullStar from "../../assets/star_full.png";
import emptyStar from "../../assets/star_empty.png";

function Content({ props })
{
    const {accomodationId } = useParams();

    const accomodation = props.houses.find((product)=> product.id === accomodationId);
    const ratings = accomodation.map((e)=> e.rating);
    const counting = parseInt(ratings, 5);
    
    return (
        <div className="contentContainer">
            <div className="contentInfo">
                {accomodation.map((house)=>
                    <div className="PageTitle" key={house.id}>
                        <div className="Countrytitle">
                            <h4 className="AccomodationTitle">{house.title}</h4>
                            <p className="city">{house.location}</p>
                        </div>
                        <div className="tags">
                            <ul className="tagLists">
                                {accomodation.map((tags)=>
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
                    {accomodation.map((house)=>
                        <div className="hostIdentity" key={house.host.name}>
                            <p className="hostName">{house.host.name}</p>
                            <img className="hostPicture" src={house.host.picture} alt={house.host.picture} />
                        </div>
                    )}

                    <div className="ratingContainer">
                        <div className="ratings">
                            <div className="starRatings">
                                {[...Array(counting)].map((starF, index)=>
                                {
                                    return (
                                        <img className="fullStar" alt="" key={index} src={fullStar} />
                                    )
                                })}
                            </div>

                            <div className="starRatings">
                                {[...Array(counting)].map((starE, index)=>
                                    {
                                        return (
                                            <img className="emptyStar" alt="" key={index} src={emptyStar} />
                                        )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;

