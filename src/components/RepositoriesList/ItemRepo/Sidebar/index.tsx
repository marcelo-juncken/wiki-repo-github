import React from 'react';
import { FaStar as StarIcon, FaEye as EyeIcon } from "react-icons/fa6";
import SidebarItem from "./SidebarItem";
import { SidebarContainer } from "./styles";
import {SidebarProps} from "../../../../types/components/ListRepo/ItemRepo/Sidebar";

const Sidebar = ({ bookmarkedCount, viewsCount, htmlUrl } : SidebarProps) => {
    const handleButtonClick = () => {
        window.open(htmlUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <SidebarContainer className='sidebar' >
            <SidebarItem>
                <StarIcon className={`fa-icon star stars-${bookmarkedCount}`} />
                {bookmarkedCount}
            </SidebarItem>
            <SidebarItem>
                <button onClick={handleButtonClick}>
                    <EyeIcon className={`fa-icon view views-${viewsCount}`} />
                </button>
                {viewsCount}
            </SidebarItem>
        </SidebarContainer>
    );
};

export default Sidebar;
