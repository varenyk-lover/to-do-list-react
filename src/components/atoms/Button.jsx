import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Button = ({handleClick, text, children, type, isPrimary}) => (
    <StyledButton onClick={handleClick} type={type} primary={isPrimary}>{children || text}</StyledButton>
);

export default Button;


Button.propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    isPrimary: PropTypes.bool
};

Button.defaultProps = {
    text: "",
    isPrimary: false,
    handleClick: null
};

const StyledButton = styled.button`
  background: ${({primary, theme}) => primary ? theme.secondaryBgColor : "transparent"};
  color: ${({theme}) => theme.titleColor};
  font-size: ${({primary}) => primary ? "25px" : "20px"};
  margin: ${({primary}) => primary ? "10px" : "0"};
  padding: ${({primary}) => primary ? "5px 15px" : "3px 7px 0 7px"};
  border-radius: 10px;
  border: ${({primary}) => primary ? "1px solid" : "1px solid"};
  border-color: ${({primary, theme}) => primary ? theme.secondaryBgColor : "transparent"};

  :hover {
    background: ${({primary, theme}) => primary ? theme.titleColor : "transparent"};
    color: ${({theme}) => theme.mainBgColor};
    border: 1px solid;
    border-color: ${({theme}) => theme.titleColor};
    cursor: pointer;
  }

  :active {
    transform: scale(1.2);
  }

  @media only screen and (max-width: 960px) {
    font-size: 20px;
    padding: ${({primary}) => primary ? "3px 10px" : "3px 6px 0 6px"};
  }

  @media only screen and (max-width: 480px) {
    font-size: 15px;
    padding: ${({primary}) => primary ? "3px 10px" : "3px 6px 0 6px"};
  }
`;
