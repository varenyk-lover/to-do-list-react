import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atoms/Button";

const Filter = ({handleClick}) => (
    <StyledFilterContainer>
        <Button type="button" handleClick={handleClick} text="All"/>
        <Button type="button" handleClick={handleClick} text="Active"/>
        <Button type="button" handleClick={handleClick} text="Done"/>
    </StyledFilterContainer>
);


export default Filter;


Filter.propTypes = {
    handleClick: PropTypes.func.isRequired
}


const StyledFilterContainer = styled.div`
  background: ${({bgColor}) => bgColor || "#45454C"};
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;
