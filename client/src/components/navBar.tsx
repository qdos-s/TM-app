import React, {FC, useContext} from 'react';
import {Link} from "react-router-dom";
//@ts-ignore
import logo from '../img/logo.png'
import '../css/navBar.css'
import {Context} from "../index";

const NavBar: FC = () => {
    const {store} = useContext(Context)

    return (
        <nav className="navbar navbar-expand-lg navbar-light navBg">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarRightAlignExample"
                    aria-controls="navbarRightAlignExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home">
                                <img src={logo} className="logoImg"/>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse" id="navbarRightAlignExample">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 listMargin">
                        <li className="nav-item">
                            <Link to="/home"
                                  className="nav-link active"
                                  aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"
                                  className="nav-link"
                                  onClick={() => store.logout()}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;