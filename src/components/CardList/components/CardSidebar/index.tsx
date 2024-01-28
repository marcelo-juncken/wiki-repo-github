import React from 'react';
import {FaEye as EyeIcon, FaStar as StarIcon} from "react-icons/fa6";
import IconWithValue from "../../../IconWithValue";
import {CardSidebarContainer} from "./styles";
import {CardSidebarProps} from "../../../../types/components/CardList/components/CardSidebar";

const CardSidebar = ({bookmarkedCount, viewsCount, onViewClick}: CardSidebarProps) => {

    return (
        <CardSidebarContainer className='sidebar'>
            <IconWithValue>
                <StarIcon className={`fa-icon star stars-${bookmarkedCount}`}/>
                {bookmarkedCount}
            </IconWithValue>
            <IconWithValue>
                <button onClick={onViewClick}>
                    <EyeIcon className={`fa-icon view`}/>
                </button>
                {viewsCount}
            </IconWithValue>
        </CardSidebarContainer>
    );
};

export default CardSidebar;
