import React from 'react';

import {InputContainer} from './styles'

interface InputProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({value, onChange} : InputProps) => {
    return (
        <InputContainer>
            <input value={value} onChange={onChange}/>
        </InputContainer>
    )
}
export default Input;