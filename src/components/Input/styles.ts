import styled from "styled-components";

export const InputContainer = styled.div`
    min-height: ${props => props.theme.sizes.inputHeight};
    width: 80%;
    margin: 20px;
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.colors.inputBorder};

    input {
        width: 100%;
        height: 100%;
        padding: 0 20px;
        background: transparent;
        color: ${props => props.theme.colors.text};
        font-size: 20px;
        outline: none;
        border: none;
    }

    input::placeholder {
        color: #fff;
        font-style: italic;
        opacity: 1;
    }

`