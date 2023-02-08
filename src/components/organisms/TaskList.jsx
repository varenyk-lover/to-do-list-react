import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TaskItem from "../molecules/TaskItem";

const TaskList = ({onClick, checkHandler, isChecked, input}) => (
    <StyledTaskList>
        {tasks.map((task) => (
            <TaskItem checked={isChecked} onChange={checkHandler} onClick={onClick} input={task.input}/>
        ))}
    </StyledTaskList>

);


export default TaskList;


TaskList.propTypes = {
    onClick: PropTypes.func.isRequired,
    checkHandler: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
}

const StyledTaskList = styled.div`
  background: ${({bgColor}) => bgColor || "#45454C"};
  padding: 15px 20px 10px 20px;
`;