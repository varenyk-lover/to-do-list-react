import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TaskItem from "../molecules/TaskItem";

const TaskList = ({handleEdit, handleDelete, checkHandler, isChecked, allTasks}) => {

    return (
        <StyledTaskList>
            {allTasks.map((item, index) => (
                <TaskItem handleEdit={handleEdit} handleDelete={handleDelete}
                          checkHandler={checkHandler} isChecked={isChecked} value={item} key={`${item}-${index}`}/>
            ))}
        </StyledTaskList>
    )
};


export default TaskList;


TaskList.propTypes = {
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    checkHandler: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    allTasks: PropTypes.array.isRequired,
}

const StyledTaskList = styled.div`
  background: transparent;
  padding: 0 2px;
  width: 100%;
  margin-bottom: 10px;
`;