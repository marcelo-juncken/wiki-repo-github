import styled from "styled-components";
import {IconWithValueContainerProps} from "../../types/components/IconWithValue";

export const IconWithValueContainer = styled.div<IconWithValueContainerProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: center;
    margin-bottom: 16px;
`