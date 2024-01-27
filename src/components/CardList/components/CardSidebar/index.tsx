import React from 'react';
import { FaStar as StarIcon, FaEye as EyeIcon } from "react-icons/fa6";
import IconWithValue from "../../../IconWithValue";
import { CardSidebarContainer } from "./styles";
import {CardSidebarProps} from "../../../../types/components/CardList/components/CardSidebar";

const CardSidebar = ({ bookmarkedCount, viewsCount, htmlUrl } : CardSidebarProps) => {
    const handleButtonClick = () => {
        window.open(htmlUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <CardSidebarContainer className='sidebar' >
            <IconWithValue>
                <StarIcon className={`fa-icon star stars-${bookmarkedCount}`} />
                {bookmarkedCount}
            </IconWithValue>
            <IconWithValue>
                <button onClick={handleButtonClick}>
                    <EyeIcon className={`fa-icon view`} />
                </button>
                {viewsCount}
            </IconWithValue>
        </CardSidebarContainer>
    );
};

export default CardSidebar;
