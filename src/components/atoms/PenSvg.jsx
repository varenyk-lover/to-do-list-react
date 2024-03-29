import React from "react";
import styled from "styled-components";
import {ReactComponent as PenIcon} from "../../assets/images/pen-icon.svg";


const PenSvg = () => (
    <StyledIconPen/>
);

export default PenSvg;


const StyledIconPen = styled(PenIcon)`
  width: 16px;
  height: 16px;
  fill: ${({theme}) => theme.titleColor};
  background-color: transparent;
`;


