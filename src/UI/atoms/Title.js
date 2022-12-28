import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const StyledTitle = styled.h1`
  text-align: center;
  font-weight: 600;
  color: ${props => props.color ? "#1D1D23" : "white"};
`;

const Title = ({text}) => {
    return <StyledTitle>{text}</StyledTitle>
};

Title.propTypes = {
    text: PropTypes.string,
}
export default Title;