import fullStar from "../../assets/star_full.png";
import emptyStar from "../../assets/star_empty.png";
import "./ratings.css";

function Ratings ({ rating })
{
     /** Get the star ratings for each accomodation */
     const starF = <img src={fullStar} alt="full star"/>
     const starE = <img src={emptyStar} alt="empty star"/>
     const arrayStars = [];
     const maxRating = 5;
     for (let i = 0; i < maxRating; i++)
     {
        i < rating ? arrayStars.push(starF) : arrayStars.push(starE);
     }

     return (
        <ul className="ratingContainer">
            {arrayStars.map((star, i)=>
                <li key={i}>{star}</li> 
            )}
        </ul>

     )
}

export default Ratings;