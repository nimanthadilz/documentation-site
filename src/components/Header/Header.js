import React from "react";
import "./Header.scss";
import sprite from "../../img/sprite.svg";

const Header = () => {
    return (
        <div className="header">
            <div className="searchbox">
                <svg className="searchbox__icon">
                    <use href={sprite + "#icon-magnifying-glass"} />
                </svg>
                <input className="searchbox__input" placeholder="Search topics" type="text"></input>
            </div>
        </div>
    );
};

export default Header;
