import React from "react";
import useFetch from "../../components/useFetch";
import Carousel from "../../components/Carousel";
import Content from "../../components/Content";
import CollapseAccomodation from "../../components/CollapseAccomodation";
import "./accomodations.css";

function Accomodations ({ props }) 
{
    const {
        data: houses,
        error,
        isLoading,
    } = useFetch(`https://raw.githubusercontent.com/FilizHakan/P11_Kasa/main/kasa/src/data/data.json`);

    return (
        <div>
            {isLoading && <div className="loading">Keep calm and npm install...</div>}
            {error && <div className="errorMessage">Pas de panique, c'est juste une erreur</div>}
            {houses && <Carousel houses={houses} />}
            {houses && <Content houses={houses} />}
            {houses && <CollapseAccomodation houses={houses} />}
        </div>
    )
}

export default Accomodations;