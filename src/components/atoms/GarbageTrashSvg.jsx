import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GarbageTrashIcon } from "../../assets/images/garbage-trash-icon.svg"

const StyledIconPen = styled(GarbageTrashIcon)`
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

