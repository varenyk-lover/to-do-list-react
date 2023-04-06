import React from "react";
import styled from "styled-components";
import {ReactComponent as MoonIcon} from "../../assets/images/moon-icon.svg";


const MoonSvg = () => (
    <StyledIconMoon/>
);

export default MoonSvg;


const StyledIconMoon = styled(MoonIcon)`
  width: 40px;
  height: 40px;
  background: transparent;
`;
