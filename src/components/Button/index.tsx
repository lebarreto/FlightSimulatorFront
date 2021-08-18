import React from "react";
import { Button } from "@material-ui/core";

import "./styles.css";

interface IProps {
    content: string;
}

const ButtonComponent: React.FC<IProps> = (props: IProps) => {
    const { content } = props;

    return (
        <div className="button-div">
            <Button variant="contained" color="primary" className="button">
                {content}
            </Button>
        </div>
    );
};

export default ButtonComponent;
