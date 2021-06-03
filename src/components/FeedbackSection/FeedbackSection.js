import React from "react";
import "./FeedbackSection.scss";
import sprite from "../../img/sprite.svg";

const FeedbackSection = () => {
    return (
        <section className="section-feedback">
            <div className="section-feedback__left">
                <p>Did this doc help you ?</p>
                <svg className="section-feedback__icon section-feedback__icon">
                    <use href={sprite + "#icon-like"} />
                </svg>
                <svg className="section-feedback__icon section-feedback__icon">
                    <use href={sprite + "#icon-unlike"} />
                </svg>
            </div>
            <div className="section-feedback__right">
                <p className="maintext">Help us to make this docs great!</p>
                <p className="subtext">
                    All Sperenza docs are open source. See something wrong or
                    unclear ? Submit a pull request.
                </p>
                <button className="section-feedback__btn">Make a contribution</button>
            </div>
        </section>
    );
};

export default FeedbackSection;