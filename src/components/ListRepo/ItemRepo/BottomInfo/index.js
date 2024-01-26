import React from 'react';
import {BottomInfoContainer} from "./styles";
import PropTypes from 'prop-types';
import languageColors from '../../../../assets/languagesColors.json';
const BottomInfo = ({language, updatedAt}) => {

    const languageColor = languageColors[language] || '#000'

    return (
        <BottomInfoContainer languageColor={languageColor}>
            <p>{language}</p>
            <p>Last edited: {updatedAt.split('T')[0]}</p>
        </BottomInfoContainer>
    );
};

BottomInfo.propTypes = {
    language: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
};

export default BottomInfo;