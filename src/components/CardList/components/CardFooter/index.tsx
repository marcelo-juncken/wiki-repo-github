import React from 'react';
import {CardFooterContainer} from "./styles";
import {LANGUAGES} from "../../../../assets/languagesColors";
import {CardFooterProps} from "../../../../types/components/CardList/components/CardFooter";

const CardFooter = ({language, updatedAt}: CardFooterProps) => {
    const languageColor = LANGUAGES[language] || '#000'

    return (
        <CardFooterContainer languagecolor={languageColor}>
            <p>{language}</p>
            <p>Last edited: {updatedAt.split('T')[0]}</p>
        </CardFooterContainer>
    );
};


export default CardFooter;