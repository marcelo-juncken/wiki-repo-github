import React from 'react';
import {CardItemContainer} from "./styles";
import CardSidebar from "../CardSidebar";
import {FaRegCircleXmark as RemoveIcon} from "react-icons/fa6";
import CardFooter from "../CardFooter";
import {CardItemProps} from "../../../../types/components/CardList/components/CardItem";

const CardItem = ({repository, onRemoveRepo, onViewClick}: CardItemProps) => {

    const {
        name,
        description,
        language,
        updated_at: updatedAt,
        stargazers_count: starsCount,
        watchers_count: viewsCount,
    } = repository;

    return (
        <CardItemContainer>
            <h3>{name}</h3>
            <h2>{description}</h2>
            <CardSidebar bookmarkedCount={starsCount} viewsCount={viewsCount} onViewClick={onViewClick}/>
            <CardFooter language={language ?? ''} updatedAt={updatedAt}/>
            <RemoveIcon onClick={onRemoveRepo} className="fa-icon remove"/>
        </CardItemContainer>
    );
};

export default CardItem;