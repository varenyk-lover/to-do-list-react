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
  color: ${({color}) => color || "white"};
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

  @media only screen and (max-width: 1200px) {
    font-size: 15px;
    padding: 5px 0;
  }
`;
