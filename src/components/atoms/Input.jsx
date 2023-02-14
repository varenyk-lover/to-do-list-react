import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Input = ({handleChange, textPlaceholder, input, typeOfInput}) => (
    <StyledInput type={typeOfInput} onChange={handleChange} value={input} placeholder={textPlaceholder}/>
);


export default Input;


Input.propTypes = {
    typeOfInput: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    textPlaceholder: PropTypes.string.isRequired,
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
