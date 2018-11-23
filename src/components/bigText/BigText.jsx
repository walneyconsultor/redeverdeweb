import React from 'react';

import { Text } from 'grommet';

const bigTextSettings = {
    alignSelf: "end",
    color: "white",
    margin: "16px",
    size: "xxlarge",
    tag: "h1",
    textAlign: "center",
    weight: "bolder"
}

export default ({ children }) => <Text {...bigTextSettings} >{children}</Text>;