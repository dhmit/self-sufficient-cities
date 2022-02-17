import React from "react";
import DH_LOGO from "../../images/dh_logo.svg";

const Nav = () => {

    return (
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <div className="container-fluid">
                <a className="navbar-brand link-home" href="/">Self-Sustaining Meme Generator</a>
                <a className="lab-link" href="https://digitalhumanities.mit.edu/" target="_blank"
                    rel="noreferrer">
                    <img className="lab-image" src={DH_LOGO}/>
                </a>
            </div>
        </nav>
    );
};

export default Nav;
