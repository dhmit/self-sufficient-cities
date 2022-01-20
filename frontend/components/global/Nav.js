import React from "react";
import DH_LOGO from "../../images/dh_logo.svg";

const Nav = () => {

    return (
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <a className="navbar-brand link-home" href="/">Self-Sustaining Cities</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-2">
                    <a href={"/map"}>Map Template</a>
                </li>
                <li className="nav-item mr-2">
                    <a href={"/map-micro"}><b>MapMacro (morning)</b></a>
                </li>
                <li className="nav-item mr-2">
                    <a href={"/map-macro"}><b>MapMicro (afternoon)</b></a>
                </li>
                <li className="nav-item mr-2">
                    <a href={"/example/1"}>Example</a>
                </li>
            </ul>
            <a className="lab-link" href="https://digitalhumanities.mit.edu/" target="_blank"
                rel="noreferrer">
                <img className="lab-image" src={DH_LOGO}/>
            </a>
        </nav>
    );
};

export default Nav;
