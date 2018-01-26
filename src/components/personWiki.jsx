import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class PersonWiki extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
            .then(res => res.json())
            .then(person => {
                this.setState({ ...person });
            });
    }

    render() {
        console.log(this.state);
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.name}</h5>
                    <p className="card-text person-text"><b>Age: </b>{this.state.age}</p>
                    <p className="card-text person-text"><b>Gender: </b>{this.state.gender}</p>
                    <p className="card-text person-text"><b>Eye color: </b>{this.state.eye_color}</p>
                    <p className="card-text person-text"><b>Hair color: </b>{this.state.hair_color}</p>
                </div>
            </div>
        );
    }

}

export default PersonWiki;