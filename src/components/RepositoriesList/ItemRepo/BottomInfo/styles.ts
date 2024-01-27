import styled from "styled-components";
import {BottomInfoContainerProps} from "../../../../types/components/ListRepo/ItemRepo/BottomInfo";

export const BottomInfoContainer = styled.div<BottomInfoContainerProps>`
    display: flex;
    grid-area: footer_info;
    justify-content: space-between;
    align-items: end;

    p {
        font-size: 16px;

        &:nth-child(1) {
            color: ${props => props.languagecolor};
            font-weight: bold;
        }
    }

`