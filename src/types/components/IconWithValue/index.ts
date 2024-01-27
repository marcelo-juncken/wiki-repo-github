import React from "react";

export interface IconWithValueProps {
    children: React.ReactNode
    classname?: string
    direction?: 'row' | 'column';
}

export interface IconWithValueContainerProps {
    direction?: 'row' | 'column';
}