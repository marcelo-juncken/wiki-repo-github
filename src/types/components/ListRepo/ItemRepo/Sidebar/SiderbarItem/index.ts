import React from "react";

export interface SidebarItemProps {
    children : React.ReactNode
    classname?: string
    direction?: 'row' | 'column';
}

export interface SidebarItemContainerProps {
    direction?: 'row' | 'column';
}