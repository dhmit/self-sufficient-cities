import React from "react";
import DH_LOGO from "../../images/dh_logo.svg";

const Nav = () => {

    return (
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <div className="container-fluid">
                <a className="navbar-brand link-home" href="/">Self-Sustaining Cities</a>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/api"}>API</a>
                    </li>
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/timeline"}>Timeline</a>
                    </li>
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/map-macro"}>MapMacro (morning)</a>
                    </li>
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/map-micro"}>MapMicro (afternoon)</a>
                    </li>
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/map-consolidated"}>MapConsolidated</a>
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
