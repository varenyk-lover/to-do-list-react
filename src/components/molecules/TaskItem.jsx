import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
// import PenSvg from "../atoms/PenSvg";

const TaskItem = ({onClick, children, checkHandler, isChecked}) => (

    <StyledTaskItem>
        <label style={{background: "#45454C", color: "white"}}>
            <Checkbox checked={isChecked} onChange={checkHandler}/>
            <span style={{marginLeft: 8, background: "#45454C"}}>taskName</span>
        </label>

        <Button onClick={onClick}
                // children={<PenSvg/>}
        />

    </StyledTaskItem>

);


export default TaskItem;



const StyledTaskItem = styled.li`
  background: ${({bgColor}) => bgColor || "#45454C"};
  content: none;
`;