import React from "react";
import "./FeedbackSection.scss";
import sprite from "../../img/sprite.svg";

const FeedbackSection = () => {
    return (
        <section className="section-feedback">
            <div className="section-feedback__block section-feedback__block--left">
                <p>Did this doc help you ?</p>
                <button className="section-feedback__btn section-feedback__like-btn">
                    <svg className="section-feedback__icon">
                        <use href={sprite + "#icon-like"} />
                    </svg>
                </button>
                <button className="section-feedback__btn section-feedback__unlike-btn">
                    <svg className="section-feedback__icon">
                        <use href={sprite + "#icon-unlike"} />
                    </svg>
                </button>
            </div>
            <div className="section-feedback__block section-feedback__block--right">
                <p className="maintext">Help us to make this docs great!</p>
                <p className="subtext">
                    All Speranza docs are open source. See something wrong or
                    unclear ? Submit a pull request.
                </p>
                <button className="section-feedback__btn">
                    Make a contribution
                </button>
            </div>
        </section>
    );
};

export default FeedbackSection;
