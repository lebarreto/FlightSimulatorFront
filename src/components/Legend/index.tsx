import React from "react";
import "./styles.css";

import HelImg from "../../assets/hel.svg";
import DroneImg from "../../assets/drone.svg";
import AerSmall from "../../assets/aer-small.svg";
import AerMedium from "../../assets/aer-med.svg";
import AerLarge from "../../assets/aer-larg.svg";
import Geofencing from "../../assets/geofencing.svg";
import Met from "../../assets/met.svg";
import Obstacles from "../../assets/barrier.svg";

interface IProps {
    aerLargOpacity: boolean;
    aerMedOpacity: boolean;
    aerSmallOpacity: boolean;
    geoOpacity: boolean;
    metOpacity: boolean;
    obsOpacity: boolean;
    helOpacity: boolean;
    uasOpacity: boolean;
    setAerLargOpacity: (data: boolean) => void;
    setAerMedOpacity: (data: boolean) => void;
    setAerSmallOpacity: (data: boolean) => void;
    setGeoOpacity: (data: boolean) => void;
    setMetOpacity: (data: boolean) => void;
    setObsOpacity: (data: boolean) => void;
    setHelOpacity: (data: boolean) => void;
    setUasOpacity: (data: boolean) => void;
}

const Legend: React.FC<IProps> = (props: IProps) => {
    const {
        aerLargOpacity,
        aerMedOpacity,
        aerSmallOpacity,
        geoOpacity,
        metOpacity,
        obsOpacity,
        helOpacity,
        uasOpacity,
        setAerLargOpacity,
        setAerMedOpacity,
        setAerSmallOpacity,
        setGeoOpacity,
        setHelOpacity,
        setMetOpacity,
        setObsOpacity,
        setUasOpacity,
    } = props;

    return (
        <div className="legend">
            <div className="legend-info">
                <button
                    style={aerLargOpacity ? { opacity: 0.6 } : { opacity: 1 }}
                    onClick={() => setAerLargOpacity(!aerLargOpacity)}
                >
                    <div className="info">
                        <img src={AerLarge} alt="AER Large" />
                        <p>AER LARGE</p>
                    </div>
                </button>
                <button
                    style={aerMedOpacity ? { opacity: 0.6 } : { opacity: 1 }}
                    onClick={() => setAerMedOpacity(!aerMedOpacity)}
                >
                    <div className="info">
                        <img src={AerMedium} alt="AER Medium" />
                        <p>AER MEDIUM</p>
                    </div>
                </button>
                <button
                    style={aerSmallOpacity ? { opacity: 0.6 } : { opacity: 1 }}
                    onClick={() => setAerSmallOpacity(!aerSmallOpacity)}
                >
                    <div className="info">
                        <img src={AerSmall} alt="AER Small" />
                        <p>AER SMALL</p>
                    </div>
                </button>
            </div>
            <div className="legend-info">
                <button
                    style={geoOpacity ? { opacity: 0.6 } : { opacity: 1 }}
                    onClick={() => setGeoOpacity(!geoOpacity)}
                >
                    <div className="info">
                        <img src={Geofencing} alt="Geofencing" />
                        <p>GEOFENCING</p>
                    </div>
                </button>
                <button
                    style={metOpacity ? { opacity: 0.6 } : { opacity: 1 }}
                    onClick={() => setMetOpacity(!metOpacity)}
                >
                    <div className="info">
                        <img src={Met} alt="MET" />
                        <p>MET</p>
                    </div>
                </button>
                <button
                    style={obsOpacity ? { opacity: 0.6 } : { opacity: 1 }}
                    onClick={() => setObsOpacity(!obsOpacity)}
                >
                    <div className="info">
                        <img src={Obstacles} alt="Obstacles" />
                        <p>OBSTACLES</p>
                    </div>
                </button>
            </div>
            <div className="legend-info">
                <button
                    style={helOpacity ? { opacity: 0.6 } : { opacity: 1 }}
                    onClick={() => setHelOpacity(!helOpacity)}
                >
                    <div className="info">
                        <img src={HelImg} alt="HEL" />
                        <p>HEL</p>
                    </div>
                </button>
                <button
                    style={uasOpacity ? { opacity: 0.6 } : { opacity: 1 }}
                    onClick={() => setUasOpacity(!uasOpacity)}
                >
                    <div className="info">
                        <img src={DroneImg} alt="UAS" />
                        <p>UAS PORT</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Legend;
