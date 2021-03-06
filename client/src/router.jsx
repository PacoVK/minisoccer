import React from 'react';
import { Router } from "@reach/router";
import Grafics from './scenes/grafics'
import Home from './scenes/home'
import Setup from './scenes/setup'

const GraficsScene = () => {
    return(
        <Grafics/>
    )
};

const DrinksScene = () => {
    return(
        <Home/>
    )
};

const SetupScene = () => {
    return(
        <Setup/>
    )
};

const routes = () => {
    return(
        <Router>
            <DrinksScene path="/"/>
            <GraficsScene path="/statistic" />
            <SetupScene path="/setup"/>
        </Router>
    );
};

export default routes;
