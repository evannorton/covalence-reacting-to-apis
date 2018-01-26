import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                    <Link to={"people/" + this.props.id}>More</Link>
                </div>
            </div>
        );
    }

}

export default Person;