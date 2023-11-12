import React from "react";
import styled from "styled-components";
import {ReactComponent as SunIcon} from "../../assets/images/sun-icon.svg";


const SunSvg = () => (
    <StyledIconSun/>
);

export default SunSvg;


const StyledIconSun = styled(SunIcon)`
  width: 40px;
  height: 40px;
  background: transparent;
`;


