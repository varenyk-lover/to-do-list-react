import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import Counter from "../atoms/Counter";
import Title from "../atoms/Title";
import Filter from "../molecules/Filter";
import Form from "../molecules/Form";
import TaskList from "../organisms/TaskList";
import ThemeToggler from "../molecules/ThemeToggler";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../assets/theme/theme";

const MainPage = () => {
    const [newTask, setNewTask] = useState({});
    const [allTasks, setAllTasks] = useState([]);
    const [amountOfAllTasks, setAmountOfAllTasks] = useState(0);
    const [amountOfDoneTasks, setAmountOfDoneTasks] = useState(0);
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState("");
    const [renderSearch, setRenderSearch] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(allTasks);


    const [theme, setTheme] = useState("light");

    const isDarkTheme = theme === "dark";
    const [isToggled, setIsToggled] = useState(isDarkTheme);
    const toggleTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark")
    };


    const handleToggler = () => {
        setIsToggled(!isToggled);
        toggleTheme();
    };


    useEffect(() => {
        setAmountOfAllTasks(allTasks.length);
    }, [allTasks]);


    const handleAddTask = ({target}) => {
        const {name, value} = target;
        setNewTask((prev) => ({
            ...prev,
            id: Date.now(),
            [name]: value,
            checked: false
        }));
    };

    const handleSubmitNewTask = (event) => {
        event.preventDefault();
        if (!newTask.title) return;
        setAllTasks((prev) => [newTask, ...prev]);
        setNewTask({});
        setRenderSearch((prev) => [newTask, ...prev]);
        setFilter((prev) => [newTask, ...prev]);
    };

    const handleDeleteTask = (taskIdToRemove) => {
        setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
        setRenderSearch((prev) => prev.filter((task) => task.id !== taskIdToRemove));
        setFilter((prev) => prev.filter((task) => task.id !== taskIdToRemove));

        if (amountOfDoneTasks < 1) {
            setAmountOfDoneTasks(0);
        } else {
            setAmountOfDoneTasks(amountOfDoneTasks - 1);
        }
    };

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

    const handleSearchTask = (event) => {
        setSearch(event.target.value);

        const searchedTasks = allTasks.filter((task) => {
            return task.title.toLowerCase().includes(event.target.value.toLowerCase());
        });

        setRenderSearch(searchedTasks);

    };

    const handleFilteredTasks = (checked) => {
        if (checked === "all") {
            setFilter(allTasks);
            setRenderSearch(allTasks);
        } else {
            let filteredTasks = [...allTasks].filter(task => task.checked === checked);
            setFilter(filteredTasks);
            setRenderSearch(filteredTasks);
        }
    };


    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <StyledMainPage>
                <ThemeToggler toggleTheme={toggleTheme} handleToggler={handleToggler} isToggled={isToggled}/>
                <Title heading="Things to do"/>
                <Counter amountOfAllTasks={amountOfAllTasks} amountOfDoneTasks={amountOfDoneTasks}/>
                <Input type="text" placeholder="Search" handleChange={handleSearchTask} value={search} name="search"/>
                <Filter handleAllTasks={() => handleFilteredTasks("all")}
                        handleActiveTasks={() => handleFilteredTasks(false)}
                        handleDoneTasks={() => handleFilteredTasks(true)}/>
                <TaskList filter={filter} handleDelete={handleDeleteTask}
                          checkHandler={checkHandler}
                          handleEdit={editTask}
                          handleSubmit={saveEditedTask}
                          handleChange={setValue} value={value} edit={edit} search={search}
                          renderSearch={renderSearch}/>
                <Form value={newTask.title || ""} handleSubmit={handleSubmitNewTask}
                      handleChange={handleAddTask} text="Add" placeholder="Add new task"/>
            </StyledMainPage>
        </ThemeProvider>
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
  background-color: ${({theme}) => theme.mainBgColor};
  transition: all 1s ease;
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