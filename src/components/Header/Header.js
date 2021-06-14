import React from "react";
import "./Header.scss";
import sprite from "../../img/sprite.svg";
import NameBox from "../NameBox/NameBox";
import Hamburger from "../Hamburger/Hamburger";

const Header = ({ controlSidebar }) => {

    return (
        <div className="header">
            <div className="header-small-screen-container">
                <Hamburger className="menu-icon" />
                <NameBox />
            </div>
            <form className="searchbox">
                <svg className="searchbox__icon">
                    <use href={sprite + "#icon-magnifying-glass"} />
                </svg>
                <input
                    className="searchbox__input"
                    placeholder="Search topics"
                    type="text"
                ></input>
            </form>
        </div>
    );
};

export default Header;
