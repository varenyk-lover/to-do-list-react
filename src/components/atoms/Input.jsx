import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Input = ({handleChange, placeholder, input, type}) => (
    <StyledInput type={type} onChange={handleChange} value={input} placeholder={placeholder}/>
);


export default Input;


Input.propTypes = {
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}

Input.defaultProps = {
    input: ""
}

const StyledInput = styled.input`
  background: ${({bgColor}) => bgColor || "#45454C"};
  color: white;
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

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

`;
