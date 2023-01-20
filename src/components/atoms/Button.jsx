import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Button = ({onClick, text, children}) => (
    <StyledButton onClick={onClick}>{text || children}</StyledButton>
);


export default Button;


Button.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string,
    onClick: PropTypes.func
}


const StyledButton = styled.button`
  background: ${({bgColor}) => bgColor || "#45454C"};
  color: ${({color}) => color || "white"};
  font-size: 25px;
  margin: 10px;
  padding: 5px 15px;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  border-color: transparent;

  :hover {
    background: ${({bgColor}) => bgColor || "white"};
    color: ${({color}) => color || "#505053"};
  }
`;
