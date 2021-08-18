import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import uasPortIcon from "../../assets/drone.svg";
import heliportIcon from "../../assets/hel.svg";
import aerSmallIcon from "../../assets/aer-small.svg";
import aerMedIcon from "../../assets/aer-med.svg";
import aerLargIcon from "../../assets/aer-larg.svg";
import droneIcon from "../../assets/drone2.svg";

import { IPort } from "../../utils/interfaces";
import "./styles.css";

const uasIcon = Leaflet.icon({
    iconUrl: uasPortIcon,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

const helIcon = Leaflet.icon({
    iconUrl: heliportIcon,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

const smallAirportIcon = Leaflet.icon({
    iconUrl: aerSmallIcon,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

const medAirportIcon = Leaflet.icon({
    iconUrl: aerMedIcon,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

const largAirportIcon = Leaflet.icon({
    iconUrl: aerLargIcon,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

const dronesIcon = Leaflet.icon({
    iconUrl: droneIcon,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

interface IProps {
    location: {
        lat: number;
        lng: number;
    };
    uasPort: IPort[];
    heliport: IPort[];
    airportSmall: IPort[];
    airportMed: IPort[];
    airportLarg: IPort[];
    drones: IPort[];
    uasOpacity: boolean;
    helOpacity: boolean;
    aerSmallOpacity: boolean;
    aerMedOpacity: boolean;
    aerLargOpacity: boolean;
}

const Map: React.FC<IProps> = (props: IProps) => {
    const {
        location,
        uasPort,
        uasOpacity,
        heliport,
        helOpacity,
        airportSmall,
        airportLarg,
        airportMed,
        aerLargOpacity,
        aerMedOpacity,
        aerSmallOpacity,
        drones,
    } = props;

    console.log(drones, "++++++");

    return (
        <>
            <MapContainer
                center={location}
                zoom={15}
                style={{ maxWidth: "100%", height: "100%" }}
            >
                {/* <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
                /> */}
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* {position && (
                    <Marker
                    icon={mapPinIcon}
                    position={[position.latitude, position.longitude]}
                    ></Marker>
                )} */}
                {!uasOpacity &&
                    uasPort.map((uas) => (
                        <Marker
                            key={uas.id}
                            icon={uasIcon}
                            position={[
                                uas.position.latitude,
                                uas.position.longitude,
                            ]}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                <div>
                                    <h3>{uas.name}</h3>
                                    <p>
                                        {uas.municipality} - {uas.state},{" "}
                                        {uas.country}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                {!helOpacity &&
                    heliport.map((hel) => (
                        <Marker
                            key={hel.id}
                            icon={helIcon}
                            position={[
                                hel.position.latitude,
                                hel.position.longitude,
                            ]}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                <div>
                                    <h3>{hel.name}</h3>
                                    <p>
                                        {hel.municipality} - {hel.state},{" "}
                                        {hel.country}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                {!aerSmallOpacity &&
                    airportSmall.map((smallAirport) => (
                        <Marker
                            key={smallAirport.id}
                            icon={smallAirportIcon}
                            position={[
                                smallAirport.position.latitude,
                                smallAirport.position.longitude,
                            ]}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                <div>
                                    <h3>{smallAirport.name}</h3>
                                    <p>
                                        {smallAirport.municipality} -{" "}
                                        {smallAirport.state},{" "}
                                        {smallAirport.country}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                {!aerMedOpacity &&
                    airportMed.map((medAirport) => (
                        <Marker
                            key={medAirport.id}
                            icon={medAirportIcon}
                            position={[
                                medAirport.position.latitude,
                                medAirport.position.longitude,
                            ]}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                <div>
                                    <h3>{medAirport.name}</h3>
                                    <p>
                                        {medAirport.municipality} -{" "}
                                        {medAirport.state}, {medAirport.country}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                {!aerLargOpacity &&
                    airportLarg.map((largAirport) => (
                        <Marker
                            key={largAirport.id}
                            icon={largAirportIcon}
                            position={[
                                largAirport.position.latitude,
                                largAirport.position.longitude,
                            ]}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                <div>
                                    <h3>{largAirport.name}</h3>
                                    <p>
                                        {largAirport.municipality} -{" "}
                                        {largAirport.state},{" "}
                                        {largAirport.country}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                {drones.map((drone) => (
                    <Marker
                        key={drone.id}
                        icon={dronesIcon}
                        position={[
                            drone.position.latitude,
                            drone.position.longitude,
                        ]}
                    >
                        <Popup
                            closeButton={false}
                            minWidth={240}
                            maxWidth={240}
                            className="map-popup"
                        >
                            <div>
                                <h3>{drone.name}</h3>
                                <p>
                                    {drone.municipality} - {drone.state},{" "}
                                    {drone.country}
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
};

export default Map;
