import React from 'react';
import {ButtonContainer} from "./styles";

interface ButtonProps {
    onClick : () => void
}
const Button = ({onClick} : ButtonProps) => {
    return (
        <ButtonContainer onClick={onClick}>
            Search
        </ButtonContainer>
    );
};

export default Button;