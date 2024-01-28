import styled from "styled-components";
import {CardFooterContainerProps} from "../../../../types/components/CardList/components/CardFooter";

export const CardFooterContainer = styled.div<CardFooterContainerProps>`
    display: flex;
    grid-area: footer_info;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0 16px;
    border: none;
    border-top: 2px solid black;
    border-radius: 0 0 16px 16px;
    font-size: 0.8em;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    
    div.language-container {
        display: inline-flex;
        align-items: center;
    }

    div span.language-dot {
        background-color: ${props => props.$languagecolor || props.theme.colors.languageDefault};
        height: 0.8em;
        width: 0.8em;
        border: none;
        border-radius: 16px;
    }

    div.language-container .language-name {
        color: ${props => props.$languagecolor || props.theme.colors.languageDefault};
        margin-left: 4px;
    }
    
    p.date-container {
        color: black;
    }
`