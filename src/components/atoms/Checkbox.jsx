import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const Checkbox = ({checkHandler, isChecked, value}) => (
    <CheckboxContainer>
        <HiddenCheckbox type="checkbox" value={value} onChange={checkHandler} checked={isChecked}/>
        <StyledCheckbox checked={isChecked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"/>
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>

);

export default Checkbox;


Checkbox.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    checkHandler: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};


const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  background: transparent;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${({theme}) => theme.mainBgColor};
  stroke-width: 2px;
  background-color: ${({theme}) => theme.titleColor};
  border-radius: 4px;
  //border: 1px solid;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
`;
// Hide checkbox visually but remain accessible to screen readers.
const HiddenCheckbox = styled.input`
  //border: 0;
  //clip: rect(0 0 0 0);
  //height: 1px;

  //overflow: hidden;
  //padding: 0;
  //position: absolute;
  //white-space: nowrap;
  ////width: 1px;
  display: none;
`;


const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({theme}) => theme.titleColor};
  transition: all 150ms;

  :hover {
    cursor: pointer;
  }

  ${Icon} {
    visibility: ${({checked}) => checked ? 'visible' : 'hidden'};
  }

  @media only screen and (max-width: 360px) {
    width: 13px;
    height: 13px;
  }
`;

