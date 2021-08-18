import { createMuiTheme } from "@material-ui/core/styles";

// eslint-disable-next-line import/prefer-default-export
export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#09768d",
            dark: "#054653",
            light: "#85bcc7",
        },
        success: {
            main: "#54b091",
            dark: "#79c1a9",
            light: "#b3dcce",
        },
        error: {
            main: "#7b1b08",
            dark: "#a85443",
            light: "#ba786b",
        },
    },
});
