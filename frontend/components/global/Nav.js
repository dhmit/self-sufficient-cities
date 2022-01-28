import React from "react";
import DH_LOGO from "../../images/dh_logo.svg";

const Nav = () => {

    return (
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <div className="container-fluid">
                <a className="navbar-brand link-home" href="/">Self-Sustaining Cities</a>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/timeline"}>Timeline</a>
                    </li>
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/map-macro"}><b>MapMacro (morning)</b></a>
                    </li>
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/map-micro"}><b>MapMicro (afternoon)</b></a>
                    </li>
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/example/1"}>Example</a>
                    </li>
                </ul>
                <a className="lab-link" href="https://digitalhumanities.mit.edu/" target="_blank"
                    rel="noreferrer">
                    <img className="lab-image" src={DH_LOGO}/>
                </a>
            </div>
        </nav>
    );
};

export default Nav;
