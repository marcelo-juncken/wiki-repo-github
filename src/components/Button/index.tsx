import React from 'react';
import {ButtonContainer} from "./styles";
import {ButtonProps} from "../../types/components/Button";

const Button = ({text, marginleft, marginright, classname, onClick}: ButtonProps) => {
    return (
        <ButtonContainer className={classname} marginleft={marginleft} marginright={marginright} onClick={onClick}>
            {text}
        </ButtonContainer>
    );
};

export default Button;