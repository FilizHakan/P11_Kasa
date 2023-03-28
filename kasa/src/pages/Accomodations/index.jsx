import React from "react";
import { useParams, Navigate } from "react-router-dom";
import useFetch from "../../components/useFetch";
import Carousel from "../../components/Carousel";
import Content from "../../components/Content";
import Collapse from "../../components/Collapse";
import "./accomodations.css";

function Accomodations () 
{
    const 
    {
        data: houses,
        error,
        isDataLoading,
    } = useFetch(`https://raw.githubusercontent.com/FilizHakan/P11_Kasa/main/kasa/src/data/data.json`);

    const requiredData = require("../../data/data.json");

    function getId (requiredData, id)
    {
        for (let accomodationId of requiredData)
        {
            if (accomodationId.id === id)
            {
                return accomodationId;
            }
        }
    }

    const { id } = useParams();
    const accomodationId = getId(requiredData, id)

    return (
        <main>
            { accomodationId ? (
                <section>
                    {isDataLoading && <div className="loader"></div>}
                    {error && <div className="errorMessage">Pas de panique, c'est juste une erreur</div>}
                    {houses && <Carousel houses={houses} />}
                    {houses && <Content houses={houses} />}
                    
                    <div className="collapseAccomodation">
                        <div className='collapseAccoContainer'>
                            <Collapse 
                            title= "Description"
                            content= {accomodationId.description}
                            />
                        </div>
                        <div className='collapseAccoContainer'>
                            <Collapse 
                            title="Équipement"
                            content={
                                <ul>{accomodationId.equipments.map((equipment) => 
                                    <li key={equipment}>{equipment}</li>)}
                                </ul>}
                            />
                         </div>  
                    </div>
                </section>
            ) : <Navigate replace to="../../pages/Error404" /> }
                
        </main>
    )
}

export default Accomodations;