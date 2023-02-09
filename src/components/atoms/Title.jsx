import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Title = ({title}) => (
    <StyledTitle>{title}</StyledTitle>
);


export default Title;


Title.propTypes = {
    title: PropTypes.string.isRequired,
}


const StyledTitle = styled.h1`
  background: transparent;
  color: white;
  text-align: center;
  font-size: 40px;
`;
