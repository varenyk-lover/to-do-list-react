import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import PenSvg from "../atoms/PenSvg";
import GarbageTrashSvg from "../atoms/GarbageTrashSvg";

const TaskItem = ({onClick, checkHandler, isChecked, input}) => (
    <StyledTaskItem>

        <label style={{background: "transparent", color: "white", paddingTop: "14px", fontSize: "23px"}}>
            <Checkbox checked={isChecked} onChange={checkHandler}/>
            <span style={{marginLeft: 8, background: "transparent"}}>input</span>
        </label>


        <StyledBtnContainer>
            <Button onClick={onClick} children={<PenSvg/>}/>
            <Button onClick={onClick} children={<GarbageTrashSvg/>}/>
        </StyledBtnContainer>
    </StyledTaskItem>

);

export default TaskItem;

TaskItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    checkHandler: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    input: PropTypes.string.isRequired,
}

const StyledTaskItem = styled.div`

  background: transparent;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #45454C;
  margin-bottom: 20px;
`;


const StyledBtnContainer = styled.div`
  background-color: transparent;
  //padding-top: 10px;

  margin-top: 6px;
`;