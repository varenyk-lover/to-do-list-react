import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atoms/Button";

const Filter = ({onClick}) => (
    <StyledFilterContainer>
        <Button isPrimary onClick={onClick} text="All"/>
        <Button isPrimary onClick={onClick} text="Active"/>
        <Button isPrimary onClick={onClick} text="Done"/>
    </StyledFilterContainer>
);


export default Filter;


Filter.propTypes = {
    onClick: PropTypes.func.isRequired
}


const StyledFilterContainer = styled.div`
  background: transparent;
  //padding: 10px 0;
  display: flex;
`;
