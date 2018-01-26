import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import FilmList from "./filmList";
import PersonList from "./personList";
import FilmWiki from "./filmWiki";
import PersonWiki from "./personWiki";
import "../App.css";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/films" component={FilmList} />
                        <Route exact path="/people" component={PersonList} />
                        <Route path="/films/:id/" component={FilmWiki} />
                        <Route path="/people/:id/" component={PersonWiki} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }

}

export default App;