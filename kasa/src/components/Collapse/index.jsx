import React, { useState, useRef } from "react";
import arrowDown from "../../assets/arrow_open.png";
import "./collapse.css";

function Collapse(props) 
{
    
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("closed");
    const content = useRef(null);
    
    function toggle()
    {
        setActiveState(setActive === "inactive" ? "active" : "inactive");
        setHeightState(setActive === "inactive" ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setRotate === "closed" ? "open" : "closed");
    }

    return (
        <div className="collapseContainer">
            <button className={`collapseBtn ${setActive}`} onClick={toggle}>
                <p className="collapseTitle">{props.title}</p>
                <img className={`${setRotate}`} alt="collapse" src={arrowDown} />
            </button>

            <div className="collapseContent" ref={content} style={{ maxHeight: `${setHeight}` }}>
                <div className="collapeListContainer">
                <div className="collapseText">{props.content}</div>
                </div>
            </div>
        </div>
    )

}

export default Collapse;