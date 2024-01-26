import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    img {
        border-radius: 100px;
        transition: transform 0.5s;
        
        transform: translateX(0);
    }
    
    img.user{
        transform: translateX(-625%) scale(1.1);
    }
`