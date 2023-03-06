import React from 'react';
import TaskList from "../organisms/TaskList";

const MainPage = () => {
    const [isChecked, setIsChecked] = React.useState(false);
    const tasks = ['task 1', 'task 2', 'task 3'];


    const handleCheck = (e) => {
        e.preventDefault();
        setIsChecked(e.target.checked);
        console.log(`${e.target.checked} is checked`);
    }
    return (
        <>
            <TaskList handleEdit={() => console.log('edit')} handleDelete={() => console.log('delete')}
                      checkHandler={handleCheck} isChecked={isChecked} tasks={tasks}/>
        </>
    );
}
export default MainPage;