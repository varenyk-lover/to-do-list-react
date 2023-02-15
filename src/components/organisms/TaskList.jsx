import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TaskItem from "../molecules/TaskItem";

const TaskList = ({handleEdit, handleDelete, checkHandler, isChecked, tasks}) => {

    return (
        <StyledTaskList>

            {tasks.map((item, index) => (
                <TaskItem handleEdit={handleEdit} handleDelete={handleDelete}
                          checkHandler={checkHandler} isChecked={isChecked} task={item} key={`${item}-${index}`}/>
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
    // task: PropTypes.string.isRequired,
}

const StyledTaskList = styled.div`
  background: ${({bgColor}) => bgColor || "#45454C"};
  padding: 15px 20px 10px 20px;
`;