import styled from "styled-components";

export const BottomInfoContainer = styled.div`
    display: flex;
    grid-area: footer_info;
    justify-content: space-between;
    align-items: end;

    p {
        font-size: 16px;

        &:nth-child(1) {
            color: ${props => props.languageColor};
            font-weight: bold;
        }
    }

`