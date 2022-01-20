import React from "react";
import DH_LOGO from "../../images/dh_logo.svg";

const Nav = () => {

    return (
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <div className="container-fluid">
                <a className="navbar-brand link-home" href="/">Self-Sustaining Cities</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href={"/map"}>Map</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/example/1"}>Example</a>
                    </li>
                </ul>
                <a className="lab-link" href="https://digitalhumanities.mit.edu/" target="_blank"
                    rel="noreferrer"><img className="lab-image" src={DH_LOGO}/>
                </a>
            </div>
        </nav>
    );
};

export default Nav;
