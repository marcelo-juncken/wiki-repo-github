import React from 'react';
import PropTypes from 'prop-types';
import {SidebarItemContainer} from "./styles";

const SidebarItem = ({children}) => {
    return (
        <SidebarItemContainer>
            {children}
        </SidebarItemContainer>
    );
};

SidebarItem.propTypes = {
    children: PropTypes.node
};
export default SidebarItem;