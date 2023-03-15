import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TaskItem from "../molecules/TaskItem";

const TaskList = ({handleEdit, handleDelete, checkHandler, allTasks}) => {

    return (
        <StyledTaskList>
            {
                allTasks.map(({title, id, checked}) => (
                    <TaskItem taskName={title} key={id} handleEdit={handleEdit} handleDelete={() => handleDelete(id)}
                              checkHandler={() => checkHandler(id)} isChecked={checked}/>
                ))
            }
        </StyledTaskList>
    )
};


export default TaskList;


TaskList.propTypes = {
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    checkHandler: PropTypes.func.isRequired,
    allTasks: PropTypes.array.isRequired,
}

const StyledTaskList = styled.div`
  background: transparent;
  padding: 0 2px;
  width: 100%;
  margin-bottom: 10px;
`;