import React, { Component } from "react";
import logo from "../logo.png";

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleFilmsClick() {
        this.props.onFilmsClick(this.state.isFilmsClicked);
    }

    handlePeopleClick() {
        this.props.onPeopleClick(this.state.isPeopleClicked);
    }

    render() {
        return (
            <div id="header" className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className="col-4 d-flex align-items-end">
                        <button type="button"
                        className="btn btn-outline-dark btn-lg btn-block"
                        onClick={() => this.handleFilmsClick()}
                        >Load Films</button>
                    </div>
                    <div className="col-4 d-flex align-items-end">
                        <button type="button"
                        className="btn btn-outline-dark btn-lg btn-block"
                        onClick={() => this.handlePeopleClick()}
                        >Load People</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;