import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .buttons-container {
        display: flex;
        width: 80%;
        margin: 0 20px 20px 20px;
        position: relative;
        overflow: hidden;
        min-height: ${props => props.theme.sizes.buttonHeight};
    }

    .search-button {
        position: absolute;
        left: 0;
        width: 100%;
        transition: width 0.9s ease-in-out;

        &.active {
            width: 49%;
        }
    }

    .reset-button {

        &.active {
            width: 49%;
            opacity: 1;
            visibility: visible;
            transition: width 0.9s ease-in-out, opacity 0.9s ease-in-out, visibility 0.1s ease-in-out;
        }

        position: absolute;
        right: 0;
        width: 0;
        opacity: 0;
        visibility: hidden;
        transition: width 0.9s ease-in-out, opacity 0.1s ease-in-out 0.7s, visibility 0.1s ease-in-out 0.7s;
    }
`