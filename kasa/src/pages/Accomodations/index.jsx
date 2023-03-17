import React from "react";
import useFetch from "../../components/useFetch";
import Carousel from "../../components/Carousel";
import Content from "../../components/Content";
import CollapseAccomodation from "../../components/CollapseAccomodation";
import "./accomodations.css";

function Accomodations () 
{
    const 
    {
        data: houses,
        error,
        isDataLoading,
    } = useFetch(`https://raw.githubusercontent.com/FilizHakan/P11_Kasa/main/kasa/src/data/data.json`);

    return (
        <main>
            {isDataLoading && <div className="loading">Keep calm and npm install...</div>}
            {error && <div className="errorMessage">Pas de panique, c'est juste une erreur</div>}
            {houses && <Carousel houses={houses} />}
            {houses && <Content houses={houses} />}
            {houses && <CollapseAccomodation houses={houses} />}
        </main>
    )
}

export default Accomodations;