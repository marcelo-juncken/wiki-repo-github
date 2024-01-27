import React from 'react';
import {BottomInfoContainer} from "./styles";
import {LANGUAGES} from "../../../../assets/languagesColors";
import {BottomInfoProps} from "../../../../types/components/ListRepo/ItemRepo/BottomInfo";

const BottomInfo = ({language, updatedAt} : BottomInfoProps) => {
    const languageColor = LANGUAGES[language] || '#000'

    return (
        <BottomInfoContainer languagecolor={languageColor}>
            <p>{language}</p>
            <p>Last edited: {updatedAt.split('T')[0]}</p>
        </BottomInfoContainer>
    );
};


export default BottomInfo;