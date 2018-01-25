import React, { Component } from "react";
import Person from "./person";

class PersonList extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="container-fluid justify-content-center">
                <div className="row">
                    {this.props.people.map((person, index) => {
                        return (
                            <div key={index} className="col-lg-4">
                                <Person name={person.name} age={person.age} gender={person.gender} url={person.url} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default PersonList;