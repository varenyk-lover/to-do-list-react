import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TaskItem from "../molecules/TaskItem";
import Form from "../molecules/Form";

const TaskList = ({
                      handleSubmit,
                      handleChange,
                      edit,
                      value,
                      handleEdit,
                      handleDelete,
                      checkHandler,
                      allTasks,
                      search,
                      renderSearch
                  }) => (
    <StyledTaskList>
        {search ? renderSearch.map(({title, id, checked}) => (
                <div key={id} style={{backgroundColor: "transparent"}}>
                    {
                        edit === id ?
                            <Form handleSubmit={() => handleSubmit(id)} text="Save"
                                  handleChange={(event) => handleChange(event.target.value)} value={value}
                            />
                            :
                            <TaskItem taskName={title} handleEdit={() => handleEdit(id, title)}
                                      handleDelete={() => handleDelete(id)}
                                      checkHandler={() => checkHandler(id)} isChecked={checked}/>
                    }
                </div>

            ))
            :
            allTasks.map(({title, id, checked}) => (
                <div key={id} style={{backgroundColor: "transparent"}}>
                    {
                        edit === id ?
                            <Form handleSubmit={() => handleSubmit(id)} text="Save"
                                  handleChange={(event) => handleChange(event.target.value)} value={value}
                            />
                            :
                            <TaskItem taskName={title} handleEdit={() => handleEdit(id, title)}
                                      handleDelete={() => handleDelete(id)}
                                      checkHandler={() => checkHandler(id)} isChecked={checked}/>
                    }
                </div>

            ))
        }
    </StyledTaskList>
);

export default TaskList;


TaskList.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    edit: PropTypes.number,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    checkHandler: PropTypes.func.isRequired,
    allTasks: PropTypes.array.isRequired,
};

TaskList.defaultProps = {
    edit: null
};


const StyledTaskList = styled.div`
  background: transparent;
  padding: 0 2px;
  width: 100%;
  margin-bottom: 10px;
`;