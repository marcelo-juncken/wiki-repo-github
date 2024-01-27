import styled from "styled-components";
import {SidebarItemContainerProps} from "../../../../../types/components/ListRepo/ItemRepo/Sidebar/SiderbarItem";

export const SidebarItemContainer = styled.div<SidebarItemContainerProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: center;
    margin-bottom: 16px;
`