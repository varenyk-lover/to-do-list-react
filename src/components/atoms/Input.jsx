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
    placeholder: PropTypes.string.isRequired,
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
  border-style: solid;
  cursor: pointer;
  border-color: transparent;
  width: 100%;

  ::placeholder {
    text-align: center;
  }


  :focus {
    outline: 0;
    outline-offset: 0;
    border-color: white;
  }

  :hover {
    border-color: white;
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 15px;
    padding: 5px 0;
  }

  @media only screen and (max-width: 480px) {
    margin: 0;
  }
`;
