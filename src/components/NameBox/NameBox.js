import React from "react";
import "./NameBox.scss";
import sprite from "../../img/sprite.svg";


const NameBox = () => {
    return (
        <div className={ `namebox`}>
            <svg className="namebox__icon">
                <use href={sprite + "#icon-logo"} />
            </svg>
            <h1 className="namebox__text">Speranza Docs</h1>
        </div>
    );
};

export default NameBox;