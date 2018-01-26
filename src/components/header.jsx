import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div id="header" className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={logo} alt="Logo" className="w-100" />
                        </div>
                        <div className="col-lg-3 d-flex align-items-end">
                            <Link to="/"
                                className="btn btn-outline-dark btn-lg btn-block d-flex justify-content-center align-items-center"
                            >Go Home</Link>
                        </div>
                        <div className="col-lg-3 d-flex align-items-end">
                            <Link to="/films"
                                className="btn btn-outline-dark btn-lg btn-block d-flex justify-content-center align-items-center"
                            >Load Films</Link>
                        </div>
                        <div className="col-lg-3 d-flex align-items-end">
                            <Link to="/people"
                                className="btn btn-outline-dark btn-lg btn-block d-flex justify-content-center align-items-center"
                            >Load People</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default Header;