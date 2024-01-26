import React from 'react';
import PropTypes from 'prop-types';
import { FaStar as StarIcon, FaEye as EyeIcon } from "react-icons/fa6";
import SidebarItem from "./SidebarItem";
import { SidebarContainer } from "./styles";

const Sidebar = ({ bookmarkedCount, viewsCount, htmlUrl }) => {
    const handleButtonClick = () => {
        window.open(htmlUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <SidebarContainer>
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

Sidebar.propTypes = {
    bookmarkedCount: PropTypes.number.isRequired,
    viewsCount: PropTypes.number.isRequired,
    htmlUrl: PropTypes.string.isRequired,
};

export default Sidebar;
