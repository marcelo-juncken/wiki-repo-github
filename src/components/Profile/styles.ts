import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    min-height: calc(90px + 32px);
    background-color: ${props => props.theme.colors.secondaryBg};
    padding: 16px 0;
    display: flex;
    position: relative;

    &.active {
        display: grid;
        grid-template-areas: 
            'name followers' 
            'bio location';
        justify-content: space-between;
        padding-left: calc(10% + 90px + 16px);
        padding-right: calc(10%);
        align-items: center;
    }

    img {
        width: 90px;
        height: 90px;
        border-radius: 100px;
        left: calc(50% - 45px);
        position: absolute;
        transition: left 0.9s ease-in-out;


        &.active {
            left: 10%;
        }
    }

    h2, h3, h4, .followers {
        visibility: hidden; 
        opacity: 0;
        overflow: hidden;
        white-space: nowrap;
        color: white;
        transition: 0s;

        &.active {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.9s ease-in-out 0.6s;
        }
    }

    .follower-text {
        margin-right: 8px;
    }

    .followers, h4 {
        justify-self: flex-end;
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
`;