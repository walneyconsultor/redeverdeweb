import React from 'react';

import { BounceLoader } from 'halogenium';
import { Box } from 'grommet';

const backgroundSettings = {
    color: "#4DAF7C",
    opacity: false,
    position: "center",
    dark: false,
}

const Loading = () => {
    return (
        <Box>
            direction="column"
            elevation="none"
            fill={true}
            background={backgroundSettings}>
            <BounceLoader color="#F5F5F5" size="32px" margin="16px"/>
        </Box>
    )
}

export default Loading;