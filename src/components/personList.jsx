import React, { Component } from "react";
import Person from "./person";
import "isomorphic-fetch";
import "es6-promise";

class PersonList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            people: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => {
                this.setState({ people });
            }
            );
    }

    render() {
        return (
            <div className="container-fluid justify-content-center">
                <div className="row">
                    {this.state.people.map((person, index) => {
                        return (
                            <div key={index} className="col-lg-4">
                                <Person name={person.name} age={person.age} gender={person.gender} url={person.url} id={person.id} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default PersonList;