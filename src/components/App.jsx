import React, { Component } from "react";
import FilmList from "./filmList"
import "isomorphic-fetch";
import "es6-promise";
import "../App.css";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => {
            this.setState({
                films: [...obj]
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <FilmList films={this.state.films} />
            </React.Fragment>
        );
    }

}

export default App;