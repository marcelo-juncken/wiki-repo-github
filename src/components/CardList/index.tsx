import React from 'react';
import {CardListContainer} from "./styles";
import CardItem from "./components/CardItem";
import {CardListProps} from "../../types/components/CardList";

const CardList = ({repositories, status, onRemoveRepo, onViewClick}: CardListProps) => {
    return (
        <CardListContainer className={status}>
            {repositories.map(repo => (
                <CardItem
                    key={repo.id}
                    repository={repo}
                    onRemoveRepo={() => onRemoveRepo(repo.id)}
                    onViewClick={() => onViewClick(repo.html_url)}
                />
            ))}
        </CardListContainer>
    );
};

export default CardList;