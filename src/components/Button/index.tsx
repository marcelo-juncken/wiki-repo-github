import React from 'react';
import {ButtonContainer} from "./styles";
import {ButtonProps} from "../../types/components/Button";

const Button = ({onClick}: ButtonProps) => {
    return (
        <ButtonContainer onClick={onClick}>
            Search
        </ButtonContainer>
    );
};

export default Button;