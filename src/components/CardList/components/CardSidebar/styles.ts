import styled from "styled-components";

export const CardSidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: sidebar;
    justify-content: start;
    margin: 16px 16px 16px 0;

    button {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;

        &:focus {
            outline: none;
        }

        transition: transform 0.3s;

        &:hover {
            transform: scale(1.4);
        }
    }

    .fa-icon {
        font-size: 30px;
        margin-bottom: 4px;
    }

    .fa-icon.view {
        color: ${props => props.theme.colors.viewIcon};
        cursor: pointer;

        &:hover {
            color: ${props => props.theme.colors.viewIconHover};
        }
    }

    .fa-icon.star {
        color: yellow;
    }

    .fa-icon.stars-0 {
        color: ${props => props.theme.colors.text}
    }
`