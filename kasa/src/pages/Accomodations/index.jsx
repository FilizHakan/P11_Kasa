import React from "react";
import useFetch from "../../components/useFetch";
import Carousel from "../../components/Carousel";
import Content from '../../components/Content'
import "./accomodations.css";

const Accomodations = (props) => 
{
    const {
        data: blogs,
        error,
        isLoading,
    } = useFetch(`https://raw.githubusercontent.com/FilizHakan/P11_Kasa/main/kasa/src/data/data.json`);

    return (
        <div>
            {blogs && <Carousel blogs={blogs} />}
            {isLoading && <div className="loading">Keep calm and npm install...</div>}
            {error && <div className="errorMessage">Pas de panique, c'est juste une erreur</div>}
            {blogs && <Content blogs={blogs} />}
        </div>
    )
}

export default Accomodations;