import React from 'react';
import gitLogo from "../../assets/github.png";
import {ProfileContainer} from "./styles";
import IconWithValue from "../IconWithValue";
import {FaUserGroup as FollowersIcon} from "react-icons/fa6";
import {ProfileProps} from "../../types/components/Profile";

const Profile = ({userSelected, status}: ProfileProps) => {


    return (
        <ProfileContainer className={status}>
            <h2 className={status}>{userSelected?.name}</h2>
            <h3 className={status}>{userSelected?.bio}</h3>
            <h4 className={status}>{userSelected?.location}</h4>
            <div className={`followers ${status}`}>
                <IconWithValue direction={"row"}>
                    <p className={"follower-text"}>{userSelected?.followers}</p>
                    <FollowersIcon className={`fa-icon follower followers-${userSelected?.followers}`}/>
                </IconWithValue>
            </div>
            <img className={status} src={userSelected ? userSelected.avatar_url : gitLogo}
                 alt={'Logo'}/>
        </ProfileContainer>

    );
};

export default Profile;