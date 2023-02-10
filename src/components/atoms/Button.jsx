import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Button = ({onClick, text, children, isPrimary}) => (
    <StyledButton className="redTest" onClick={onClick} primary={isPrimary}>{children || text}</StyledButton>
);


export default Button;


Button.propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    primary: PropTypes.bool
}

Button.defaultProps = {
    text: "",
    primary: false
}


const StyledButton = styled.button`
  background: ${({primary}) => primary ? "#45454C" : "transparent"};
  color: white;
  font-size: ${({primary}) => primary ? "25px" : "20px"};
  margin: ${({primary}) => primary ? "10px" : "0"};
  padding: ${({primary}) => primary ? "5px 15px" : "3px 5px 0 5px"};
  border-radius: 10px;
  border: ${({primary}) => primary ? "1px solid #45454C" : "1px solid transparent"};;

  :hover {
    background: ${({primary}) => primary ? "white" : "transparent"};
    color: #262631;
    border: 1px solid white;
    cursor: pointer;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 15px;
    padding: ${({primary}) => primary ? "3px 10px" : "3px 5px 0 5px"};
  }
`;
