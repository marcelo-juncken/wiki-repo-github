import React from 'react';
import {SidebarItemContainer} from "./styles";
import {SidebarItemProps} from "../../../../../types/components/ListRepo/ItemRepo/Sidebar/SiderbarItem";

const SidebarItem = ({children, classname, direction} : SidebarItemProps) => {
    return (
        <SidebarItemContainer className={classname} direction={direction}>
            {children}
        </SidebarItemContainer>
    );
};

export default SidebarItem;