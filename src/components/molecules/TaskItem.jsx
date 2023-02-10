import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import PenSvg from "../atoms/PenSvg";
import GarbageTrashSvg from "../atoms/GarbageTrashSvg";

const TaskItem = ({onClick, checkHandler, isChecked, input}) => (
    <StyledTaskItem>

        <StyledLabel>
            <Checkbox checked={isChecked} onChange={checkHandler}/>
            <span style={{marginLeft: 8, background: "transparent"}}>input</span>
        </StyledLabel>


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

  @media only screen and (max-width: 1200px) {
    margin-bottom: 5px;
  }
`;

const StyledLabel = styled.label`
  background: transparent;
  color: white;
  padding-top: 14px;
  font-size: 23px;

  @media only screen and (max-width: 1200px) {
    font-size: 18px;
  }
`;

const StyledBtnContainer = styled.div`
  background-color: transparent;
  margin-top: 6px;
`;