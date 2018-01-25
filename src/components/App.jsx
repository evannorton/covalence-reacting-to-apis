import React, { Component } from "react";
import Header from "./header";
import FilmList from "./filmList"
import "isomorphic-fetch";
import "es6-promise";
import "../App.css";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            films: [],
            isClicked: false
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => {
                this.setState({ films });
            }
        );
    }

    handleClick(isClicked) {
        this.setState({ isClicked: true })
    }

    render() {
        if (this.state.isClicked) {
            return (
                <React.Fragment>
                    <Header onClick={(isClicked) => this.handleClick(isClicked)}/>
                    <FilmList films={this.state.films} />
                </React.Fragment>
            );
        } else {
            return (
                <Header onClick={(isClicked) => this.handleClick(isClicked)}/>
            );
        }
    }

}

export default App;