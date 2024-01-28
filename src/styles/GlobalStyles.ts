import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${props => props.theme.fonts.main};
    }

    body {
        background-color: ${props => props.theme.colors.primaryBg};
        color: ${props => props.theme.colors.text};
        overflow-y: scroll;
    }
`;
