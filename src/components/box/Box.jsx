import React from 'react';
import { Box } from 'grommet';

const boxSettings = {
    align: "center",
    alignContent: "center",
    alignSelf: "center",
    basis: "auto",
    direction: "column",
    elevation: "none",
    fill: true,
    flex: "grow",
    justify: "center",
    responsive: true
}

const ContentBox = ({ children, color }) => <Box background={{
        color,
        dark: true, 
        opacity: false,
        position: "center"
    }} {...boxSettings} >{children}</Box>;

export default ContentBox;