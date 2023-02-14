import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Button = ({handleClick, text, children, typeOfBtn}) => (
    <StyledButton onClick={handleClick} type={typeOfBtn}>{children || text}</StyledButton>
);


export default Button;


Button.propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
    handleClick: PropTypes.func,
    typeOfBtn: PropTypes.string.isRequired,
}

Button.defaultProps = {
    text: "",
}


const StyledButton = styled.button`
  background: ${({bgColor}) => bgColor || "#45454C"};
  color: ${({color}) => color || "white"};
  font-size: 25px;
  margin: 10px;
  padding: 5px 15px;
  border-radius: 10px;
  border-style: none;
  border-color: transparent;

  :hover {
    background: ${({bgColor}) => bgColor || "white"};
    color: ${({color}) => color || "#505053"};
    border-color: ${({brdrColor}) => brdrColor || "white"};
    cursor: pointer;
  }
`;
