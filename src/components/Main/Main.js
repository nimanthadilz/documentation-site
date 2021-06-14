import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Main.scss";
import GettingStarted from "../GettingStarted/GettingStarted";
import BasicUsage from "../BasicUsage/BasicUsage";
import Installation from "../Installation/Installation";
import AdvanceTopics from "../AdvanceTopics/AdvanceTopics";
import FAQ from "../FAQ/FAQ";

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/getting-started">
                    <GettingStarted />
                </Route>
                <Route path="/basic-usage">
                    <BasicUsage />
                </Route>
                <Route path="/installation">
                    <Installation />
                </Route>
                <Route path="/advance-topics">
                    <AdvanceTopics />
                </Route>
                <Route path="/faq">
                    <FAQ />
                </Route>
                <Route path="/">
                    <GettingStarted />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
