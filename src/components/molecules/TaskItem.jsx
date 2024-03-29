import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import PenSvg from "../atoms/PenSvg";
import GarbageTrashSvg from "../atoms/GarbageTrashSvg";

const TaskItem = ({handleEdit, handleDelete, checkHandler, isChecked, taskName}) => (
    <StyledTaskItem>

        <StyledLabel>
            <Checkbox isChecked={isChecked} checkHandler={checkHandler} value={taskName}/>
            <StyledSpan>{taskName}</StyledSpan>
        </StyledLabel>


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
    taskName: PropTypes.string.isRequired,
};


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
  color: ${({theme}) => theme.titleColor};
  padding-top: 14px;
`;

const StyledSpan = styled.span`
  margin-left: 8px;
  background: transparent;
  font-size: 23px;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 15px;
  }
`;

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  margin-top: 6px;
  padding-right: 5px;
  min-width: 70px;
  height: 30px;
`;

