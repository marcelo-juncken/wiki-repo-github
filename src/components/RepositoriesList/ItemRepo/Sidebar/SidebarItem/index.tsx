import React from 'react';
import {SidebarItemContainer} from "./styles";
import {SidebarItemProps} from "../../../../../types/components/ListRepo/ItemRepo/Sidebar/SiderbarItem";

const SidebarItem = ({children} : SidebarItemProps) => {
    return (
        <SidebarItemContainer>
            {children}
        </SidebarItemContainer>
    );
};

export default SidebarItem;