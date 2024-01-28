import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    min-height: calc(90px + 32px);
    background-color: ${props => props.theme.colors.secondaryBg};
    position: relative;

    display: grid;
    grid-template-areas: 
            'name followers' 
            'bio location';
    justify-content: space-between;
    padding-left: calc(10% + 90px + 16px);
    padding-right: calc(10%);
    align-items: center;


    img {
        width: 90px;
        height: 90px;
        border-radius: 100px;
        position: absolute;
        top: 16px;
    }

    .logo-container-left {
        display: flex;
        justify-content: end;
        width: calc(50% + 45px);
        height: calc(90px + 32px);
        left: 0;
        background-color: ${props => props.theme.colors.secondaryBg};;
        border-radius: 100px;

        position: absolute;

        transition: left 0.9s ease-in-out;
        z-index: 3;

        &.active {
            left: calc(-50% + 10% + 45px);
        }
    }
    
    .user-logo{
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        
        &.active{
            opacity: 1;
        }
    }

    .logo-container-right {
        width: calc(50% + 45px);
        min-height: calc(90px + 32px);
        right: 0;
        background-color: ${props => props.theme.colors.secondaryBg};;

        position: absolute;

        transition: right 0.9s ease-in-out;
        z-index: 2;

        &.active {
            right: calc(-50% + 10% - 45px);
        }
    }

    .follower-text {
        margin-right: 8px;
    }

    .followers, h4 {
        justify-self: flex-end;
    }

    h2 {
        grid-area: name;
    }

    h3 {
        grid-area: bio;
    }

    h4 {
        grid-area: location;
    }

    .followers {
        grid-area: followers;
    }
`;