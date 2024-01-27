import React from 'react';
import {IconWithValueContainer} from "./styles";
import {IconWithValueProps} from "../../types/components/IconWithValue";

const IconWithValue = ({children, classname, direction} : IconWithValueProps) => {
    return (
        <IconWithValueContainer className={classname} direction={direction}>
            {children}
        </IconWithValueContainer>
    );
};

export default IconWithValue;