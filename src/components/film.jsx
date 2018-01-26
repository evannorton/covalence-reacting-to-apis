import React, { Component } from "react";
import { Link } from "react-router-dom";

class Film extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="card film-card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <Link to={"films/" + this.props.id}>More</Link>
                </div>
            </div>
        );
    }

}

export default Film;