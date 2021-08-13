import React from 'react';
import About from './about';
import Error from './error';
import Home from './home';
import Navbar from './navbar';
import People from './people';
import Person from './person';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function ReactRouterDom() {
    return (
        <Router>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/error">
                <Error />
            </Route>
            <Route path="/people">
                <People />
            </Route>
            <Route path="/person">
                <Person />
            </Route>
            <Route path="/navbar">
                <Navbar/>
            </Route>
        </Router>


    )
}

export default ReactRouterDom
