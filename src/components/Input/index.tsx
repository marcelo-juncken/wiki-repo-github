import React from 'react';

import {InputContainer} from './styles'
import {InputProps} from "../../types/components/Input";


const Input = ({value, onChange}: InputProps) => {
    return (
        <InputContainer>
            <input value={value} onChange={onChange}/>
        </InputContainer>
    )
}
export default Input;