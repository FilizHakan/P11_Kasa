import { Link } from "react-router-dom";
import "./error.css";

function Error()
{
    return (
        <div>
            <div className="errorContainer">
                <h1 className="errorTitle">404</h1>
                <p className="errorContent">
                    Oops! La page que vous demandez n'existe pas.
                </p>
                <Link to="">
                    <p className="errorLink">Retourner sur la page d'accueil</p>
                </Link>
            </div>
        </div> 
    )
}

export default Error;