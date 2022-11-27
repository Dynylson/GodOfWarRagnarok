import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        black: {
            "900": "#000",
        },
        white: {
            "900": "#fff",
        },
    },
    fonts: {
        heading: "Archivo",
        body: "Archivo",
    },
    styles: {
        global: {
            body: {
                color: "white.900",
            },
        },
    },
});
