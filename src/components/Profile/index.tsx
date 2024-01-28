import React from 'react';
import gitLogo from "../../assets/github.png";
import {ProfileContainer} from "./styles";
import IconWithValue from "../IconWithValue";
import {FaUserGroup as FollowersIcon} from "react-icons/fa6";
import {ProfileProps} from "../../types/components/Profile";

const Profile = ({userSelected, status}: ProfileProps) => {


    return (
        <ProfileContainer>
            <h2>{userSelected?.name}</h2>
            <h3>{userSelected?.bio}</h3>
            <h4>{userSelected?.location}</h4>
            <div className={`followers`}>
                <IconWithValue direction={"row"}>
                    <p className={"follower-text"}>{userSelected?.followers}</p>
                    <FollowersIcon className={`fa-icon follower followers-${userSelected?.followers}`}/>
                </IconWithValue>
            </div>
            <div className={`logo-container-left ${status}`}>
                <img className="git-logo" src={gitLogo}
                     alt={'Git Logo'}/>
                <img className={`user-logo ${status}`} src={userSelected ? userSelected.avatar_url : gitLogo}
                     alt={'User Logo'}/>
            </div>
            <div className={`logo-container-right ${status}`}/>

        </ProfileContainer>

    );
};

export default Profile;