import React from 'react';
import sprite from "../../img/sprite.svg";
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="namebox">
            <svg className="namebox__icon">
                    <use href={sprite + "#icon-logo"} />
            </svg>
            <h1 className="namebox__text">Sperenza Docs</h1>
            </div>

            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className="sidebar__list--link">Getting Started</li>
                    <li className="sidebar__list--link">Installation</li>
                    <li className="sidebar__list--link">Basic Usage</li>
                    <li className="sidebar__list--link">Advance Topics</li>
                    <li className="sidebar__list--link">FAQ</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
