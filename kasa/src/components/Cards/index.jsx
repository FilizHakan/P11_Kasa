import { NavLink } from 'react-router-dom'
import './cards.css'

// Create card, image and title for each gallery card
function Cards({ props })
{
    const card = props.blogs;

    return (
        <div className="gallery">
            {card.map((blog)=>(
            <NavLink to={`/accomodations/${blog.id}`} key={blog.id} className="cardLink">
                <div className="cardBackground"></div>                
                <img className="cardImage" src={blog.cover} alt={blog.title} />
                <div className="cardMask"></div>
                <h2 className="cardTitle"> {blog.title}</h2>
            </NavLink>
            ))}
        </div>
    )
}

export default Cards