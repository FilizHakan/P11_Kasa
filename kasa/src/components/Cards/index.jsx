import { NavLink } from 'react-router-dom';
import './cards.css';

// Create card, image and title for each gallery card
function Cards({ houses })
{
    return (
        <div className="gallery">
            {houses.map((house)=>
            <NavLink to={`/accomodations/${house.id}`} key={house.id} className="cardLink">
                <div className="cardBackground"></div>                
                <img className="cardImage" src={house.cover} alt={house.title} />
                <div className="cardMask"></div>
                <h2 className="cardTitle"> {house.title}</h2>
            </NavLink>
            )}
        </div>
    )
}

export default Cards