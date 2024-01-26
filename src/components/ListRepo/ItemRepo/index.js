import React from 'react';
import PropTypes from 'prop-types';
import {ItemContainer} from "./styles";
import Sidebar from "./Sidebar";
import {FaRegCircleXmark as RemoveIcon} from "react-icons/fa6";
import BottomInfo from "./BottomInfo";


const ItemRepo = ({repo, onRemoveRepo}) => {

    const {
        name,
        description,
        language,
        updated_at : updatedAt,
        stargazers_count: bookmarkedCount,
        watchers_count: viewsCount,
        html_url: htmlUrl
    } = repo;

    return (
        <ItemContainer>
            <h3>{name}</h3>
            <h2>{description}</h2>
            <BottomInfo language={language ?? ''} updatedAt={updatedAt}/>
            <Sidebar className='sidebar' bookmarkedCount={bookmarkedCount} viewsCount={viewsCount} htmlUrl={htmlUrl} repo={repo}/>
            <RemoveIcon onClick={onRemoveRepo} className="fa-icon remove"/>
        </ItemContainer>
    );
};

ItemRepo.propTypes = {
    repo: PropTypes.object.isRequired,
    onRemoveRepo: PropTypes.func.isRequired
};

export default ItemRepo;