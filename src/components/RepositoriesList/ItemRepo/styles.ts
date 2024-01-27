import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 100%;
    height: 400px;
    position: relative;

    padding: 16px;
    margin: 16px 0;

    background-color: #333;
    border: 2px solid #000;
    border-radius: 16px;
    box-shadow: 2px 2px 32px #000;

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
        color: #FAFAFA;
        grid-area: title;
    }

    h2 {
        margin-top: 8px;
        font-size: 24px;
        grid-area: description;
    }

    .fa-icon.remove {
        color: #F00;
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
            background: #E6000040; 
            transform: scale(1.1);
            padding: 0;
        }
    }
`