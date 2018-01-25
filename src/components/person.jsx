import React, { Component } from "react";

class Person extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="card">
                <div className="card-body person-card">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text person-text">Age: {this.props.age}</p>
                    <p className="card-text person-text">Gender: {this.props.gender}</p>
                    <a target="_blank" href={this.props.url} className="card-link">JSON Response</a>
                </div>
            </div>
        );
    }

}

export default Person;