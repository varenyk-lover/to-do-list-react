
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PenIcon } from "../../assets/images/pen-icon.svg"

const StyledIconPen = styled(PenIcon)`
  width: 16px;
  height: 16px;
  fill: ${({color}) => color || "white"};
  background-color: transparent;

  :hover {
    background-color: transparent;
  }
`;

const PenSvg = () => (
    <StyledIconPen/>
);

export default PenSvg;

