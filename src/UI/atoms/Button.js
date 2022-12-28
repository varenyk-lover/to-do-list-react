import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const StyledButton = styled.button`
  background: ${props => props.primary ? "#45454C" : "white"};
  color: ${props => props.primary ? "white" : "#45454C"};
  font-size: 25px;
  margin: 10px;
  padding: 5px 15px;
  border-radius: 10px;
  border-style: none;

  :hover  {
    background: ${props => props.primary ? "white" : "#45454C"};
    color: ${props => props.primary ? "#505053" : "white"};
  }
`;

const Button = ({onClick, text, children}) => {
    return <StyledButton primary onClick={onClick}>{text || children}</StyledButton>
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string,
    onClick: PropTypes.func
}
export default Button;