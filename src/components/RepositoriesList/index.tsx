import React from 'react';
import {ListContainer} from "./styles";
import ItemRepo from "./ItemRepo";
import {Repository} from "../../types/Repository";

export interface RepositoriesListProps {
    repositories :  Repository[],
    onRemoveRepo : (id: string) => void
}
const RepositoriesList = ({ repositories, onRemoveRepo } : RepositoriesListProps) => {
    return (
        <ListContainer>
            {repositories.map(repo => (
                <ItemRepo
                    key={repo.id}
                    repository={repo}
                    onRemoveRepo={() => onRemoveRepo(repo.id)}
                />
            ))}
        </ListContainer>
    );
};

export default RepositoriesList;