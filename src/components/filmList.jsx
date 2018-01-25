import React, { Component } from "react";
import Film from "./film";

class FilmList extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="container-fluid justify-content-center">
                <div className="row">
                    {this.props.films.map((film, index) => {
                        return (
                            <div key={index} className="col-12">
                                <Film title={film.title} desc={film.description} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default FilmList;