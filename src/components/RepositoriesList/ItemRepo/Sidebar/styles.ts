import styled from "styled-components";

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: sidebar;
    justify-content: start;

    button{
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
        color: #396739;
        cursor: pointer;
    }

    .fa-icon.views-0 {
        color: #FFF
    }

    .fa-icon.star {
        color: yellow;
    }
    
    .fa-icon.stars-0 {
        color: #FFF
    }
`