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
                      filter,
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
            filter.map(({title, id, checked}) => (
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
    filter: PropTypes.array.isRequired,
};

TaskList.defaultProps = {
    edit: null
};


const StyledTaskList = styled.div`
  overflow-y: scroll;
  max-height: 300px;
  background: transparent;
  padding: 0 2px;
  width: 100%;
  margin-bottom: 10px;

  ::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */

    @media only screen and (max-width: 992px) {
      width: 10px;
    }

    @media only screen and (max-width: 600px) {
      width: 8px;
    }

    @media only screen and (max-width: 480px) {
      width: 5px;
    }
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #45454C; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 1px solid transparent; /* creates padding around scroll thumb */
  }
`;