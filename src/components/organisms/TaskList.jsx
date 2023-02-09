import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TaskItem from "../molecules/TaskItem";

const TaskList = ({onClick, checkHandler, isChecked, input}) => (
    <StyledTaskList>
        {/*{tasks.map((task) => (*/}
        <TaskItem checked={isChecked} onChange={checkHandler} onClick={onClick}/>


        <TaskItem checked={isChecked} onChange={checkHandler} onClick={onClick}/>
        {/*))}*/}
    </StyledTaskList>

);


export default TaskList;


TaskList.propTypes = {
    onClick: PropTypes.func.isRequired,
    checkHandler: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
}

const StyledTaskList = styled.div`
  background: transparent;
  padding: 0 2px;
  width: 100%;
`;