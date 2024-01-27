import React from 'react';
import {ItemContainer} from "./styles";
import Sidebar from "./Sidebar";
import {FaRegCircleXmark as RemoveIcon} from "react-icons/fa6";
import BottomInfo from "./BottomInfo";
import {ItemRepoProps} from "../../../types/components/ListRepo/ItemRepo";


const ItemRepo = ({repository, onRemoveRepo} : ItemRepoProps) => {

    const {
        name,
        description,
        language,
        updated_at : updatedAt,
        stargazers_count : starsCount,
        watchers_count : viewsCount,
        html_url : htmlUrl
    } = repository;

    return (
        <ItemContainer>
            <h3>{name}</h3>
            <h2>{description}</h2>
            <BottomInfo language={language ?? ''} updatedAt={updatedAt}/>
            <Sidebar bookmarkedCount={starsCount} viewsCount={viewsCount} htmlUrl={htmlUrl}/>
            <RemoveIcon onClick={onRemoveRepo} className="fa-icon remove"/>
        </ItemContainer>
    );
};

export default ItemRepo;