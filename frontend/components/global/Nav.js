import React, {useState} from "react";
import DH_LOGO from "../../images/dh_logo.svg";
import Apartment from "../../images/icons/apartment.svg";

const Nav = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <nav
            className={sidebar
                ? "burger-open fixed-left navbar navbar-expand-sm"
                : "fixed-left navbar navbar-expand-sm"}>
            <a className={`btn-home d-lg-flex mt-2 mb-0 ${sidebar ? "hidden" : ""}`} href="/">
                <Apartment className={"text-center mx-auto"}/>
            </a>
            <button onClick={toggleSidebar} id="burger-icon">
                <div className="burger-item"/>
                <div className="burger-item"/>
                <div className="burger-item"/>
            </button>
            <div className={sidebar ? "container-fluid shown" : "container-fluid"}>
                <a className="navbar-brand link-home" href="/">Self-Sustaining Cities</a>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/deanwood"}>Deanwood</a>
                    </li>
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
                    <li className="nav-item mr-2">
                        <a className="nav-link" href={"/census-charts"}>Census Charts</a>
                    </li>
                </ul>
                <a className="lab-link mb-3"
                   href="https://digitalhumanities.mit.edu/" target="_blank" rel="noreferrer">
                    <img className="lab-image" src={DH_LOGO}/>
                </a>
            </div>
        </nav>
    );
};

export default Nav;

