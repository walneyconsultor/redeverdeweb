import React from 'react';
import { Box } from 'grommet';

const boxSettings = {
    align: "center",
    alignContent: "center",
    alignSelf: "center",
    // animation: "pulse",
    background: {
        color: "neutral-3",
        dark: true,
        opacity: false,
        position: "center"
    },
    basis: "auto",
    direction: "column",
    elevation: "none",
    fill: true,
    flex: "grow",
    justify: "center",
    // margin: "xsmall",
    responsive: true
}

const ContentBox = ({ children }) => <Box {...boxSettings}>{children}</Box>;

export default ContentBox;