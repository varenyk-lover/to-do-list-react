import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Input from "../atoms/Input";
import Counter from "../atoms/Counter";
import Title from "../atoms/Title";
import Filter from "../molecules/Filter";
import Form from "../molecules/Form";
import TaskList from "../organisms/TaskList";

const MainPage = () => {

    const [newTask, setNewTask] = useState({});
    const handleAddTask = ({target}) => {
        const {name, value} = target;
        setNewTask((prev) => ({
            ...prev,
            id: Date.now(),
            [name]: value,
            checked: false
        }));
    };

    const [allTasks, setAllTasks] = useState([]);
    const [amountOfAllTasks, setAmountOfAllTasks] = useState(0);
    const [amountOfDoneTasks, setAmountOfDoneTasks] = useState(0);

    const handleSubmitNewTask = (event) => {
        event.preventDefault();
        if (!newTask.title) return;
        setAllTasks((prev) => [newTask, ...prev]);
        setNewTask({});
    };

    const handleDeleteTask = (taskIdToRemove) => {
        setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));

        if (amountOfDoneTasks < 1) {
            setAmountOfDoneTasks(0);
        } else {
            setAmountOfDoneTasks(amountOfDoneTasks - 1);
        }
    };


    useEffect(() => {
        setAmountOfAllTasks(allTasks.length);
    }, [allTasks]);

    const checkHandler = (id) => {
        let checkedTask = [...allTasks].filter(task => {
            if (task.id === id) {
                task.checked = !task.checked;
                if (task.checked === true) {
                    setAmountOfDoneTasks(amountOfDoneTasks + 1);
                } else if (task.checked === false) {
                    setAmountOfDoneTasks(amountOfDoneTasks - 1);
                }
            }
            return task;
        })
        setAllTasks(checkedTask);
    };


    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');

    const editTask = (id, title) => {
        setEdit(id);
        setValue(title);
    };

    const saveEditedTask = (id) => {
        let changedTask = [...allTasks].map(task => {
            if (task.id === id) {
                task.title = value;
            }
            return task;
        });
        setAllTasks(changedTask);
        setEdit(null);
    };

    return (
        <StyledMainPage>
            <Title heading="Things to do"/>
            <Counter amountOfAllTasks={amountOfAllTasks} amountOfDoneTasks={amountOfDoneTasks}/>
            <Input type="text" placeholder="Search"/>
            <Filter/>
            <TaskList allTasks={allTasks} handleDelete={handleDeleteTask} checkHandler={checkHandler}
                      handleEdit={editTask}
                      handleSubmit={saveEditedTask}
                      handleChange={setValue} value={value} edit={edit}/>
            <Form value={newTask.title || ""} handleSubmit={handleSubmitNewTask}
                  handleChange={handleAddTask} text="Add" placeholder="Add new task"/>
        </StyledMainPage>
    );
};

export default MainPage;


const StyledMainPage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background-color: #262631;
  border-radius: 15px;
  box-shadow: 0 12px 17px 2px hsla(0, 0%, 0%, 0.14),
  0 5px 22px 4px hsla(0, 0%, 0%, 0.12),
  0 7px 8px -4px hsla(0, 0%, 0%, 0.2);


  @media only screen and (max-width: 1680px) {
    width: 50%;
  }

  @media only screen and (max-width: 992px) {
    width: 60%;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;