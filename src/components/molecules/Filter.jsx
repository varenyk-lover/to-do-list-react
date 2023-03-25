import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atoms/Button";

const Filter = ({handleAllTasks, handleActiveTasks, handleDoneTasks}) => (
    <StyledFilterContainer>
        <Button isPrimary type="button" handleClick={handleAllTasks} text="All"/>
        <Button isPrimary type="button" handleClick={handleActiveTasks} text="Active"/>
        <Button isPrimary type="button" handleClick={handleDoneTasks} text="Done"/>
    </StyledFilterContainer>
);

export default Filter;


Filter.propTypes = {
    handleAllTasks: PropTypes.func.isRequired,
    handleActiveTasks: PropTypes.func.isRequired,
    handleDoneTasks: PropTypes.func.isRequired,
};


const StyledFilterContainer = styled.div`
  background: transparent;
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;
