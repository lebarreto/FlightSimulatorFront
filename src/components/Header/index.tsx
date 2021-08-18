import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Header: React.FC = () => {
    return (
        <div className="header">
            <h3>Map Application</h3>

            <div className="links">
                <Link to="aircraftplans" className="link">
                    Aircraft
                </Link>
                <Link to="helicopterplans" className="link">
                    Helicopter
                </Link>
                <Link to="rpasplans" className="link">
                    RPAS
                </Link>
            </div>
        </div>
    );
};

export default Header;
