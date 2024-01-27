import React, {useEffect, useState} from 'react';
import gitLogo from "../../assets/github.png";
import {User} from "../../types/User";
import {ProfileContainer} from "./styles";
import SidebarItem from "../RepositoriesList/ItemRepo/Sidebar/SidebarItem";
import {FaUserGroup as FollowersIcon} from "react-icons/fa6";

interface ProfileProps {
    userSelected: User | null
}

const Profile = ({userSelected}: ProfileProps) => {

    const [status, setStatus] = useState<"active" | "inactive" | "">("")

    useEffect(() => {
        setStatus((statusBefore) => {
            if (userSelected) return "active"

            if(statusBefore === "active") return "inactive"

            return ""
        })
    }, [userSelected])

    return (
        <ProfileContainer className={status}>
            <h2 className={status}>{userSelected?.name}</h2>
            <h3 className={status}>{userSelected?.bio}</h3>
            <h4 className={status}>{userSelected?.location}</h4>
            <div className={`followers ${status}`}>
                <SidebarItem direction={"row"}>
                    <p className={"follower-text"}>{userSelected?.followers}</p>
                    <FollowersIcon className={`fa-icon follower followers-${userSelected?.followers}`}/>
                </SidebarItem>
            </div>
            <img className={status} src={userSelected ? userSelected.avatar_url : gitLogo}
                 alt={'Logo'}/>
        </ProfileContainer>

    );
};

export default Profile;