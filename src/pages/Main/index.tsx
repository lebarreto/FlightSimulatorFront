import React, { useEffect, useState } from "react";
import moment from "moment";

import "./styles.css";
import Map from "../../components/Map";
import { IPort, IPlans } from "../../utils/interfaces";
import utmPort from "../../json/utmports.json";
import heliports from "../../json/heliports.json";
import airports from "../../json/airports.json";
import uasPlans from "../../json/uas_plans.json";
import Header from "../../components/Header";
import MapInfo from "../../components/MapInfo";

const initialPosition = { lat: -23.563350340256694, lng: -46.63079920174874 };

const Main: React.FC = () => {
    const [aerSmallOpacity, setAerSmallOpacity] = useState(false);
    const [aerMedOpacity, setAerMedOpacity] = useState(false);
    const [aerLargOpacity, setAerLargOpacity] = useState(false);
    const [geoOpacity, setGeoOpacity] = useState(false);
    const [metOpacity, setMetOpacity] = useState(false);
    const [obsOpacity, setObsOpacity] = useState(false);
    const [helOpacity, setHelOpacity] = useState(false);
    const [uasOpacity, setUasOpacity] = useState(false);

    const [uasPort, setUasPort] = useState<IPort[]>([]);
    const [heliport, setHeliport] = useState<IPort[]>([]);
    const [airportSmall, setAirportSmall] = useState<IPort[]>([]);
    const [airportMed, setAirportMed] = useState<IPort[]>([]);
    const [airportLarg, setAirportLarg] = useState<IPort[]>([]);
    const [drones] = useState<IPort[]>([]);
    const [rpasPlans, setRpasPlans] = useState<IPlans[]>([]);

    const [location] = useState(initialPosition);

    const filterAirportsSizes = () => {
        const smallAirports = airports.filter(
            (small) => small.size === "small_airport"
        );
        const medAirports = airports.filter(
            (med) => med.size === "medium_airport"
        );
        const largAirports = airports.filter(
            (larg) => larg.size === "large_airport"
        );

        setAirportSmall(smallAirports);
        setAirportMed(medAirports);
        setAirportLarg(largAirports);
    };

    const handleCurrentTime = () => {
        setRpasPlans(uasPlans);
        const newTime = moment().add(1, "hours");
        const day = newTime.date();
        const month = newTime.month();
        const year = newTime.year();
        const min = newTime.minutes();

        const filterRpasPlansByHour = uasPlans.filter(
            (rpas) =>
                rpas.takeoffTime.min <= min &&
                rpas.takeoffTime.day === day &&
                rpas.takeoffTime.month === month + 1 &&
                rpas.takeoffTime.year === year
        );

        if (filterRpasPlansByHour.length) {
            console.log(day, "=====", filterRpasPlansByHour, rpasPlans);

            setRpasPlans(filterRpasPlansByHour);
        }
    };

    useEffect(() => {
        setUasPort(utmPort);
        setHeliport(heliports);
        filterAirportsSizes();
        handleCurrentTime();
        // setAircraftPlans(airPlans);
        // setDrones([utmPort[index]]);
    }, []);

    // setInterval(() => handleDronePosition(), 10000);
    setInterval(() => handleCurrentTime, 3600000);

    return (
        <div className="container">
            <Header />
            <div className="map-container">
                <div className="details">
                    <MapInfo
                        aerLargOpacity={aerLargOpacity}
                        aerMedOpacity={aerMedOpacity}
                        aerSmallOpacity={aerSmallOpacity}
                        geoOpacity={geoOpacity}
                        helOpacity={helOpacity}
                        metOpacity={metOpacity}
                        uasOpacity={uasOpacity}
                        obsOpacity={obsOpacity}
                        setAerLargOpacity={setAerLargOpacity}
                        setAerMedOpacity={setAerMedOpacity}
                        setObsOpacity={setObsOpacity}
                        setGeoOpacity={setGeoOpacity}
                        setMetOpacity={setMetOpacity}
                        setHelOpacity={setHelOpacity}
                        setUasOpacity={setUasOpacity}
                        setAerSmallOpacity={setAerSmallOpacity}
                        rpasPlans={rpasPlans}
                    />
                </div>
                <div id="page-map">
                    <Map
                        location={location}
                        uasPort={uasPort}
                        uasOpacity={uasOpacity}
                        heliport={heliport}
                        helOpacity={helOpacity}
                        airportSmall={airportSmall}
                        aerSmallOpacity={aerSmallOpacity}
                        airportMed={airportMed}
                        aerMedOpacity={aerMedOpacity}
                        airportLarg={airportLarg}
                        aerLargOpacity={aerLargOpacity}
                        drones={drones}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
