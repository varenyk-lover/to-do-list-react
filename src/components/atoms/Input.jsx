import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Input = ({onChangeHandler, placeholder, input}) => (
    <StyledInput type="text" onChange={onChangeHandler} value={input} placeholder={placeholder}/>
);


export default Input;


Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
}


const StyledInput = styled.input`
  background: ${({bgColor}) => bgColor || "#45454C"};
  color: ${({color}) => color || "#505053"};
  font-size: 25px;
  margin: 10px;
  padding: 5px 15px;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  border-color: transparent;

  ::placeholder {
    text-align: center;
  }

  :hover {
    border-color: white;
  }
`;
