import styled from "styled-components";
import {ButtonContainerProps} from "../../types/components/Button";

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: ${props => props.theme.colors.buttonBg};
    border: 1px solid ${props => props.theme.colors.buttonBg};
    border-radius: ${props => props.theme.borderRadius};
    min-height: ${props => props.theme.sizes.buttonHeight};
    width: 100%;
    margin-left: ${props => props.$marginleft || 0};
    margin-right: ${props => props.$marginright || 0};
    &:hover {
        background-color: ${props => props.theme.colors.buttonHoverBg};
        cursor: pointer;
    }
`