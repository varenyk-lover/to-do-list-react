import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Input = ({handleChange, placeholder, value, type, name}) => (
    <StyledInput type={type} onChange={handleChange} value={value} name={name} placeholder={placeholder}/>
);

export default Input;


Input.propTypes = {
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
};

Input.defaultProps = {
    value: "",
    name: "",
};


const StyledInput = styled.input`
  background-color: ${({theme}) => theme.secondaryBgColor};
  color: ${({theme}) => theme.titleColor};
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
    color: ${({theme}) => theme.subtitleColor};
  }


  :focus {
    outline: 0;
    outline-offset: 0;
    border-color: ${({theme}) => theme.titleColor};
  }

  :hover {
    border-color: ${({theme}) => theme.titleColor};
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    padding: 5px 0;
  }

  @media only screen and (max-width: 480px) {
    font-size: 15px;
    margin: 0;
  }
`;
