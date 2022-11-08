import { Link } from 'react-router-dom'
import './cards.css'

// Create card, image and title for each gallery card
function GalleryCards(props){

    return (
        <div className="galleryCards">
            <Link to={`P11_Kasa/housing/${props.item.id}`} key={props.item.id}>
                <article className="card">                
                    <img className="thumbnail" src={props.item.cover} alt={props.item.title} />
                    <h2 className="title"> {props.item.title}</h2>
                </article>
            </Link>
        </div>
    )
}

export default GalleryCards