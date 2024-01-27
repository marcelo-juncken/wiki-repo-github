import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    min-height: calc(90px + 32px);
    background-color: ${props => props.theme.colors.secondaryBg};
    padding: 16px 0;
    display: flex;
    position: relative;

    img {
        width: 90px;
        height: 90px;
        border-radius: 100px;
        margin-left: calc(50% - 45px);
        position: absolute;
    }
    
    &.active {
        display: grid;
        grid-template-areas: 
            'name followers' 
            'bio location';
        justify-content: space-between;
        padding-left: calc(10% + 90px + 16px);
        padding-right: calc(10% + 16px);
        align-items: center;

        h2, h3, h4, .followers {
            animation: displayProfile 0.5s ease-in-out 0.9s forwards;
            visibility: hidden;
            opacity: 0;
        }
    }

    &.inactive {
        h2, h3, h4{
            animation: displayProfileReverse 0.5s ease-in-out forwards;
        }

        img {
            animation: slideLeftReverse 0.9s ease-in-out forwards;
        }
    }

    .follower-text {
        margin-right: 8px;
    }

    .followers, h4 {
        justify-self: flex-end;
    }

    h2, h3, h4, .followers {
        visibility: hidden;
        color: white;
    }

    h2.active {
        grid-area: name;
    }

    h3.active {
        grid-area: bio;
    }

    h4.active {
        grid-area: location;
    }

    .followers.active {
        grid-area: followers;
    }



    img.active {
        animation: slideLeft 0.9s ease-in-out forwards;
    }

    @keyframes slideLeft {
        to {
            margin-left: 10%;
        }
    }

    @keyframes slideLeftReverse {
        from {
            margin-left: 10%;
        }
        to {
            margin-left: calc(50% - 45px);
        }
    }

    @keyframes displayProfile {
        to {
            visibility: visible; 
            opacity: 1;
        }
    }

    @keyframes displayProfileReverse {
        from {
            visibility: visible;
            opacity: 1;
        }
        to {
            visibility: hidden;
            opacity: 0;
        }
    }
`;
