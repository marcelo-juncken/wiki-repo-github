import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: ${props => props.theme.colors.buttonBg};
    border: 1px solid ${props => props.theme.colors.buttonBg};
    border-radius: ${props => props.theme.borderRadius};
    min-height: ${props => props.theme.sizes.buttonHeight};
    width: 80%;
    margin: 20px;

    &:hover {
        background-color: ${props => props.theme.colors.buttonHoverBg};
        cursor: pointer;
    }
`