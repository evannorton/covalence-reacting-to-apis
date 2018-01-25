import React, { Component } from "react";
import logo from "../logo.png";

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleClick() {
        this.props.onClick(this.state.isClicked);
    }

    render() {
        return (
            <div id="header" className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className="col-6 d-flex align-items-end">
                        <button type="button"
                        className="btn btn-primary btn-lg btn-block"
                        onClick={() => this.handleClick()}
                        >Load Films</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;