import {FunctionComponent} from 'react'
import styled from "styled-components";

interface StyleProps {
    isSelected?: boolean;
}

export const Style: FunctionComponent<StyleProps> = ({isSelected}) => {
    return (<StyledFrame isPredicateTrue={isSelected} data-testid="frame">
        <p role="article">
            Loremipsum
        </p>
    </StyledFrame>);
};

interface StyledFrameProps {
    isPredicateTrue?: boolean
}

const StyledFrame = styled.div<StyledFrameProps>`
    background-color: ${props => props.isPredicateTrue ? 'white' : 'gray'};
`
