import styled from "styled-components";

export const CardListContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 32.5%);
    justify-content: space-between;

    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &.active{
        opacity: 1;
    }
`