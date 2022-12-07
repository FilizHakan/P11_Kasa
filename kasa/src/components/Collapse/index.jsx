import React, { useState } from "react";
import arrowUp from "../../assets/arrow_closed.png";
import "./collapse.css";

function Collapse() 
{
    const [selected, setIsSelected] = useState(null);
    
    const toggle = (e) => 
    {
        if (selected === e)
        {
            return setIsSelected(null)
        }
        setIsSelected(e)
    } 

    return (
        <div className="collapseAbout">
            <div className="containerAbout">
                {sectionAbout.map((item, e) => (
                    <div className="item" key={item.title}>
                        <div className="title" onClick={() => toggle(e)}>
                            <h2>{item.title}</h2>
                            <img className="arrowUp" src={arrowUp} style={{transition: "0.2s", transform: selected === e ? "rotate(-180deg)": null}} alt="arrow up" /> 
                        </div>

                        <div className={selected === e ? "show content" : "content"} key={e.content} >
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )   
}

    const sectionAbout = [
        {
          title: "Fiabilité",
          content:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        },
        {
          title: "Respect",
          content:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
          title: "Service",
          content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
          title: "Responsabilité ",
          content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
      ];

export default Collapse;