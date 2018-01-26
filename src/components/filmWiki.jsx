import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class FilmWiki extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
            .then(res => res.json())
            .then(film => {
                this.setState({ ...film });
            }
            );
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.title}</h5>
                    <p className="card-text">{this.state.description}</p>
                    <p className="card-text"><b>Director: </b>{this.state.director}</p>
                    <p className="card-text"><b>Producer: </b>{this.state.producer}</p>
                    <p className="card-text"><b>Release date: </b>{this.state.release_date}</p>
                    <p className="card-text"><b>Rotten Tomatoes score: </b>{this.state.rt_score}</p>
                </div>
            </div>
        );
    }

}

export default FilmWiki;