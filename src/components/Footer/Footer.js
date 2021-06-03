import React from 'react'
import sprite from "../../img/sprite.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="copyright">
                <svg className="footer__icon">
                        <use href={sprite + "#icon-logo"} />
                </svg>
                <p className="footer__text">&copy;2021 Sperenza</p>
            </div>
            <ul className="footer__list">
                <li className="footer__list-item"><a href="#" className="footer__link">Terms</a></li>
                <li className="footer__list-item"><a href="#" className="footer__link">About</a></li>
                <li className="footer__list-item"><a href="#" className="footer__link">Contact</a></li>
            </ul>
        </footer>
    )
}

export default Footer
