import React from 'react';
import {CardFooterContainer} from "./styles";
import {LANGUAGES} from "../../../../assets/languagesColors";
import {CardFooterProps} from "../../../../types/components/CardList/components/CardFooter";

const CardFooter = ({language, updatedAt}: CardFooterProps) => {
    const languageColor = LANGUAGES[language] || '#000'

    return (
        <CardFooterContainer $languagecolor={languageColor}>
            <div className="language-container">
                <span className="language-dot"></span>
                <p className="language-name">{language}</p>
            </div>
            <p className="date-container">Last edited: {updatedAt.split('T')[0]}</p>
        </CardFooterContainer>
    );
};


export default CardFooter;