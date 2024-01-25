import React from 'react';
import {ItemContainer} from "./styles";

const ItemRepo = () => {
    return (
        <ItemContainer>
            <h3>Marcelo</h3>
            <p>dio/marcelo</p>
            <a href="#">Ver Repositório</a><br/>
            <a className="remove" href="#">Remover</a>
            <hr/>
        </ItemContainer>
    );
};

export default ItemRepo;