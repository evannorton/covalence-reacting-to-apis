import React, { Component } from "react";
import Header from "./header";
import FilmList from "./filmList"
import PersonList from "./personList"
import "isomorphic-fetch";
import "es6-promise";
import "../App.css";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            films: [],
            people: [],
            filmsClicked: false,
            peopleClicked: false
        };
    }

    handleFilmsClick(filmsClicked) {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => {
                this.setState({ films });
            }
        );
        this.setState({ filmsClicked: true, peopleClicked: false })
    }

    handlePeopleClick(peopleClicked) {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => {
                this.setState({ people });
            }
        );
        this.setState({ peopleClicked: true, filmsClicked: false })
    }

    render() {
        if (this.state.filmsClicked) {
            return (
                <React.Fragment>
                    <Header
                    onFilmsClick={(filmsClicked) => this.handleFilmsClick(filmsClicked)}
                    onPeopleClick={(peopleClicked) => this.handlePeopleClick(peopleClicked)}
                    />
                    <FilmList films={this.state.films} />
                </React.Fragment>
            );
        } else if (this.state.peopleClicked) {
            return(
                <React.Fragment>
                    <Header
                    onFilmsClick={(filmsClicked) => this.handleFilmsClick(filmsClicked)}
                    onPeopleClick={(peopleClicked) => this.handlePeopleClick(peopleClicked)}
                    />
                    <PersonList people={this.state.people} />
                </React.Fragment>
            );
        } else {
            return (
                <Header
                onFilmsClick={(filmsClicked) => this.handleFilmsClick(filmsClicked)}
                onPeopleClick={(peopleClicked) => this.handlePeopleClick(peopleClicked)}
                />
            );
        }
    }

}

export default App;