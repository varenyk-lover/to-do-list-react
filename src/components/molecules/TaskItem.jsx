import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import PenSvg from "../atoms/PenSvg";
import GarbageTrashSvg from "../atoms/GarbageTrashSvg";

const TaskItem = ({handleEdit, handleDelete, checkHandler, isChecked, task}) => (
    <StyledTaskItem>

        <label style={{background: "#45454C", color: "white"}}>
            <Checkbox isChecked={isChecked} checkHandler={checkHandler}/>
            <span style={{marginLeft: 8, background: "#45454C"}}>{task}</span>
        </label>


        <StyledBtnContainer>
            <Button type="button" handleClick={handleEdit}><PenSvg/></Button>
            <Button type="button" handleClick={handleDelete}><GarbageTrashSvg/></Button>
        </StyledBtnContainer>
    </StyledTaskItem>

);

export default TaskItem;

TaskItem.propTypes = {
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    checkHandler: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    task: PropTypes.string.isRequired,
}

const StyledTaskItem = styled.div`
  max-height: 22px;
  background: ${({bgColor}) => bgColor || "#45454C"};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #45454C;
  margin-bottom: 20px;
`;


const StyledBtnContainer = styled.div`
  background-color: transparent;
`;

