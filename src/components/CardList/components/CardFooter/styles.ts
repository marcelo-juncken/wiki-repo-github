import styled from "styled-components";
import {CardFooterContainerProps} from "../../../../types/components/CardList/components/CardFooter";

export const CardFooterContainer = styled.div<CardFooterContainerProps>`
    display: flex;
    grid-area: footer_info;
    justify-content: space-between;
    align-items: end;

    p {
        font-size: 16px;

        &:nth-child(1) {
            color: ${props => props.languagecolor || props.theme.colors.languageDefault};
            font-weight: bold;
        }
    }
`