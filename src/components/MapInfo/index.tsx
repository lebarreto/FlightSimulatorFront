import React from "react";
import Clock from "react-live-clock";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TotalTable from "../TotalTable";
import Legend from "../Legend";
import { IPlans } from "../../utils/interfaces";

import "./styles.css";

interface IProps {
    aerLargOpacity: boolean;
    aerMedOpacity: boolean;
    aerSmallOpacity: boolean;
    geoOpacity: boolean;
    metOpacity: boolean;
    obsOpacity: boolean;
    helOpacity: boolean;
    uasOpacity: boolean;
    rpasPlans: IPlans[];
    setAerLargOpacity: (data: boolean) => void;
    setAerMedOpacity: (data: boolean) => void;
    setAerSmallOpacity: (data: boolean) => void;
    setGeoOpacity: (data: boolean) => void;
    setMetOpacity: (data: boolean) => void;
    setObsOpacity: (data: boolean) => void;
    setHelOpacity: (data: boolean) => void;
    setUasOpacity: (data: boolean) => void;
}

const MapInfo: React.FC<IProps> = (props: IProps) => {
    const {
        aerLargOpacity,
        aerMedOpacity,
        aerSmallOpacity,
        geoOpacity,
        metOpacity,
        obsOpacity,
        helOpacity,
        uasOpacity,
        rpasPlans,
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
        <div className="grid">
            <div className="info">
                <p>Local Time</p>
                <div className="clock">
                    <h2>
                        <Clock format="HH:mm:ss" interval={1000} ticking />
                    </h2>
                </div>
            </div>
            <div className="info">
                <p>Legend</p>
                <Legend
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
                />
            </div>
            <div className="info">
                <p>Aircraft Plans</p>
                <TotalTable
                    running={1}
                    waiting={1}
                    ended={1}
                    link="aircraftplans"
                />
            </div>
            <div className="info">
                <p>Helicopter Plans</p>
                <TotalTable
                    running={1}
                    waiting={1}
                    ended={1}
                    link="helicopterplans"
                />
            </div>
            <div className="info">
                <p>RPAS Plans</p>
                <TotalTable
                    running={1}
                    waiting={1}
                    ended={1}
                    link="rpasplans"
                />
            </div>
            <div className="info">
                <p>RPAS in Flight</p>

                {rpasPlans.length > 0 && (
                    <div className="rpas-flight">
                        <TableContainer component={Paper}>
                            <Table
                                className="rpas-table"
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Code</TableCell>
                                        <TableCell align="right">
                                            Phase
                                        </TableCell>
                                        <TableCell align="right">
                                            Status
                                        </TableCell>
                                        <TableCell align="right">
                                            Log Msg
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rpasPlans.map((plans) => (
                                        <TableRow>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {plans.aircraftCode}
                                            </TableCell>
                                            <TableCell align="right">
                                                1
                                            </TableCell>
                                            <TableCell align="right">
                                                1
                                            </TableCell>
                                            <TableCell align="right">
                                                LOREM IPSUM AKNCAJODLMDA
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MapInfo;
