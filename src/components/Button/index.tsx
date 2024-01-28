import React from 'react';
import {ButtonContainer} from "./styles";
import {ButtonProps} from "../../types/components/Button";

const Button = ({text, marginLeft, marginRight, classname, onClick}: ButtonProps) => {
    return (
        <ButtonContainer className={classname} marginLeft={marginLeft} marginRight={marginRight} onClick={onClick}>
            {text}
        </ButtonContainer>
    );
};

export default Button;