import React from 'react'
import About from './about'
import Home from './home'
import Error from './error'
import NavBar from './navbar'
import People from './people'
import Person from './person'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
function ReactRouterDom() {
    return (
        <Router>
            <NavBar />
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
                <Route path="/person/:id" children={<Person />}></Route>
                <Route path="/*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}
export default ReactRouterDom