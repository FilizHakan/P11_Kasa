import React from "react";
import { useParams } from "react-router";
import Data from '../../data/data.json'

import Carousel from "../../components/Carousel";
import Content from '../../components/Content'
import Error404 from "../Error404";

function Accomodations()
{
    const { idAccomodations } = useParams();
    const accomodations = Data.find((item) => item.id === idAccomodations)

    if(!accomodations)
    {
        return(
            <Error404/>
        )
    }
    return (
        <div className="">
            <Carousel images={accomodations?.pictures} />
            <Content info={accomodations}/>
        </div>
    )
}

export default Accomodations;