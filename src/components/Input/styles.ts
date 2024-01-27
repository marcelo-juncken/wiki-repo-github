import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid ${props => props.theme.colors.buttonBg};
    border-radius: ${props => props.theme.borderRadius};
    min-height: ${props => props.theme.sizes.inputHeight};
    width: 80%;
    margin: 20px;

    input {
        border: 0;
        width: 100%;
        height: 100%;
        padding: 0 20px;
        background: transparent;
        color: ${props => props.theme.colors.text};
        font-size: 20px;
    }
`