import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
// import Input from "./Input";

const Checkbox = ({checkHandler, isChecked, ...props}) => (
    // <input type="checkbox" checked={isChecked} onChange={checkHandler}/>


    <CheckboxContainer>
        <HiddenCheckbox handleChange={checkHandler} checked={isChecked} {...props} type="checkbox"/>

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
    checkHandler: PropTypes.func.isRequired
}


const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  background: transparent;
`;

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
  background: white;
`;
// Hide checkbox visually but remain accessible to screen readers.
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
    //background: ${({isChecked}) => (isChecked ? 'white' : '#262631')};
  background: ${props => (props.checked ? 'white' : '#262631')};
  border-radius: 2px;
  box-shadow: 0 0 0 1px white;
  transition: all 150ms;


  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

