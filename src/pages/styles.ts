import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    div.img-container {
        width: 100%;
        background-color: rebeccapurple;
    }
    @keyframes slideRight {
        from {
            margin-left: calc(50% - 36px);
        }
        to {
            margin-left: 10%;
        }
    }
    img {
        width: 90px;
        height: 90px;
        border-radius: 100px;
        margin-left: calc(50% - 36px);
    }

    img.user {
        animation: slideRight 1s linear;
        margin-left: 10%;
    }

  

`