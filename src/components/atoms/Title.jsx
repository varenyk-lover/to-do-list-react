import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Title = ({heading}) => (
    <StyledTitle>{heading}</StyledTitle>
);

export default Title;


Title.propTypes = {
    heading: PropTypes.string.isRequired,
};


const StyledTitle = styled.h1`
  background: transparent;
  color: ${({theme}) => theme.titleColor};
  text-align: center;
  font-size: 40px;

  @media only screen and (max-width: 1200px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 23px;
  }
`;
