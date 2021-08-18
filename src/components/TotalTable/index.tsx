import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./styles.css";
import { Link } from "react-router-dom";

interface IProps {
    // name: string;
    running: number;
    waiting: number;
    ended: number;
    link: string;
}

const TotalTable: React.FC<IProps> = (props: IProps) => {
    const { running, waiting, ended, link } = props;

    return (
        <div className="total-plans">
            <Link to={link}>
                {/* <h3>{name}</h3> */}
                <TableContainer component={Paper}>
                    <Table className="total-table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Running</TableCell>
                                <TableCell align="right">Waiting</TableCell>
                                <TableCell align="right">Ended</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="right"
                                >
                                    {running}
                                </TableCell>
                                <TableCell align="right">{waiting}</TableCell>
                                <TableCell align="right">{ended}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Link>
        </div>
    );
};

export default TotalTable;
