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
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/people">
                    <People />
                </Route>
                <Route path="/person/:id" children={<Person />}>

                </Route>
                <Route path="*">
                    <Error />
                </Route>

            </Switch>
        </Router>
    )
}
export default ReactRouterDom
