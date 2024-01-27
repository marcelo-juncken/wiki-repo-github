import React from "react";

export interface InputProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}