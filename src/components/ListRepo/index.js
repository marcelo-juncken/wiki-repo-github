import React from 'react';
import {ListContainer} from "./styles";
import PropTypes from 'prop-types';
import ItemRepo from "./ItemRepo";

const ListRepo = ({ repos, onRemoveRepo }) => {
    return (
        <ListContainer>
            {repos.map(repo => (
                <ItemRepo
                    key={repo.id}
                    repo={repo}
                    onRemoveRepo={() => onRemoveRepo(repo.id)}
                />
            ))}
        </ListContainer>
    );
};


ListRepo.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRemoveRepo: PropTypes.func.isRequired,
};
export default ListRepo;