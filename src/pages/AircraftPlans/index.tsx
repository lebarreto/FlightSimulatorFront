import React from "react";
import { DataGrid, GridColDef, GridToolbar } from "@material-ui/data-grid";
import { Theme } from "@material-ui/core/styles";
// eslint-disable-next-line import/no-extraneous-dependencies
import { createStyles, makeStyles } from "@material-ui/styles";

import aircraft from "../../json/aircraft_plans.json";
import "./styles.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiDataGrid-main": {
                height: "1000px",
                width: "100%",
            },
        },
    })
);

const AircraftPlans: React.FC = () => {
    const classes = useStyles();
    const rows = aircraft.map((row) => {
        const {
            aircraftCode,
            departureLocation,
            arrivalLocation,
            takeoffTime,
            ...rest
        } = row;

        return {
            id: aircraftCode,
            aircraftCode,
            departureLat: departureLocation.coordinate.latitude,
            departureLng: departureLocation.coordinate.longitude,
            arrivalLat: arrivalLocation.coordinate.latitude,
            arrivalLng: arrivalLocation.coordinate.longitude,
            takeoffTime: takeoffTime.day,
            ...rest,
        };
    });

    const columns: GridColDef[] = [
        { field: "aircraftCode", headerName: "Aircraft Code", width: 180 },
        { field: "aircraftType", headerName: "Aircraft Type", width: 180 },
        {
            field: "departureLat",
            headerName: "Departure Lat",
            width: 180,
        },
        {
            field: "departureLng",
            headerName: "Departure Lng",
            width: 180,
        },
        {
            field: "arrivalLat",
            headerName: "Arrival Lat",
            width: 180,
        },
        {
            field: "arrivalLng",
            headerName: "Arrival Lng",
            width: 180,
        },
        { field: "takeoffTime", headerName: "Take Off Time", width: 180 },
    ];

    return (
        <div className="aircraft-plans">
            <h2>Aircraft Plans</h2>
            <DataGrid
                className={classes.root}
                columns={columns}
                components={{
                    Toolbar: GridToolbar,
                }}
                rows={rows}
                filterModel={{
                    items: [
                        {
                            columnField: "aircraftCode",
                            operatorValue: "contains",
                            value: "",
                        },
                        {
                            columnField: "aircraftType",
                            operatorValue: "contains",
                            value: "",
                        },
                        {
                            columnField: "departureLat",
                            operatorValue: "contains",
                            value: "",
                        },
                        {
                            columnField: "departureLng",
                            operatorValue: "contains",
                            value: "",
                        },
                        {
                            columnField: "arrivalLat",
                            operatorValue: "contains",
                            value: "",
                        },
                        {
                            columnField: "arrivalLng",
                            operatorValue: "contains",
                            value: "",
                        },
                        {
                            columnField: "takeoffTime",
                            operatorValue: "contains",
                            value: "",
                        },
                    ],
                }}
                pageSize={40}
                checkboxSelection
            />
        </div>
    );
};

export default AircraftPlans;
