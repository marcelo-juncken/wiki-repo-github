import styled from "styled-components";

export const CardItemContainer = styled.div`
    width: 100%;
    height: ${props => props.theme.sizes.cardHeight};
    position: relative;
    margin: 2% 0;
    background-color: ${props => props.theme.colors.cardBg};
    border: 2px solid #000;
    border-radius: 16px;
    box-shadow: 2px 2px 16px #000;
    display: grid;
    grid-template-areas: 
        'title sidebar'
        'description sidebar'
        'footer_info footer_info';
    grid-template-columns: 8fr 1fr;
    grid-template-rows: 10% 60% 10%;
    align-content: space-between;
    overflow-wrap: anywhere;

    h3 {
        font-size: 32px;
        color: ${props => props.theme.colors.text};
        height: 100%;
        grid-area: title;
        margin: 16px 16px;

        overflow: hidden;
        white-space: nowrap;
    }

    h2 {
        margin: 0 16px 16px 16px;
        font-size: 24px;
        grid-area: description;

        overflow: hidden;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .fa-icon.remove {
        color: ${props => props.theme.colors.removeIcon};
        background-color: rgba(255, 0, 0, 0.1);
        font-size: 50px;
        position: absolute;
        bottom: -20px;
        left: calc(50% - 25px);
        cursor: pointer;
        border-radius: 100%;
        padding: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
        transition: background-color 0.3s, padding 0.3s, transform 0.3s;

        &:hover {
            background: ${props => props.theme.colors.removeIconHover};
            transform: scale(1.1);
            padding: 0;
        }
    }
`