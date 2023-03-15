import React, { useState } from "react";
import { useParams } from "react-router-dom";
import arrowUp from "../../assets/arrow_closed.png";
import arrowDown from "../../assets/arrow_open.png";
import "./collapseAccomodation.css";

function CollapseAccomodation({houses}) 
{
    const { id } = useParams();
    const accomodationData = houses.filter((product)=> product.id === id);
    
    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);
    
    function click1()
    {
        setSelected1((selected1)=> !selected1);
    } 

    function click2()
    {
        setSelected2((selected2)=> !selected2);
    }

    let buttonState = selected1 ? "activeState" : "inactiveState";

    return (
        <div className="collapseContainer">
            {accomodationData.map((i, index) => (
                <div className="collapseItem" key={index}>
                    <div className="buttonMask">
                        <button className={`collapseAccomodationBtn ${buttonState}`} onClick={click1}>
                            <div className="description">
                                <p className="descriptionTitle">Description</p>
                                <img className="arrowDown" alt="arrow collapse" src={arrowDown} style={{transform: selected1 ? "rotate(-180deg": null, transition: ".2s",}} />
                            </div>
                        </button>
                        <div className="descriptionContent">
                            {selected1 ? <p>{i.description}</p>: null}
                        </div>
                    </div>

                    <div className="buttonMask">
                        <div className="collapseEquipments">
                            <button className={`collapseAccomodationBtn2 ${buttonState}`} onClick={click2}>
                                <div className="equipments">
                                    <p className="equipmentsTitle">Equipements</p>
                                    <img className="arrowUp" alt="arrow2 collapse" src={arrowUp} style={{transform: selected2 ? "rotate(-180deg": null, transition: ".2s",}} />
                                </div>
                            </button>
                            {selected2 ? (
                                <div className="equipmentsContent">
                                    <ul className="equipmentsList">
                                        {i.equipments.map((e)=> <li key={e}>{e}</li>)}
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )   
}

export default CollapseAccomodation;