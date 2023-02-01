import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atoms/Button";

const Filter = ({onClick, text}) => (
    <StyledFilterContainer>
        <Button onClick={onClick} text="All"/>
        <Button onClick={onClick} text="Active"/>
        <Button onClick={onClick} text="Done"/>
    </StyledFilterContainer>
);


export default Filter;


Filter.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}


const StyledFilterContainer = styled.div`
  background: ${({bgColor}) => bgColor || "#45454C"};
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;
