import React from 'react';
import {CardListContainer} from "./styles";
import CardItem from "./components/CardItem";
import {CardListProps} from "../../types/components/CardList";

const CardList = ({repositories, onRemoveRepo}: CardListProps) => {
    return (
        <CardListContainer>
            {repositories.map(repo => (
                <CardItem
                    key={repo.id}
                    repository={repo}
                    onRemoveRepo={() => onRemoveRepo(repo.id)}
                />
            ))}
        </CardListContainer>
    );
};

export default CardList;