import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import PenSvg from "../atoms/PenSvg";
import GarbageTrashSvg from "../atoms/GarbageTrashSvg";

const TaskItem = ({onClick, checkHandler, isChecked}) => (
    <StyledTaskItem>

            <label style={{background: "#45454C", color: "white"}}>
                <Checkbox checked={isChecked} onChange={checkHandler}/>
                <span style={{marginLeft: 8, background: "#45454C"}}>taskName</span>
            </label>


        <StyledBtnContainer>
            <Button onClick={onClick} children={<PenSvg/>}/>
            <Button onClick={onClick} children={<GarbageTrashSvg/>}/>
        </StyledBtnContainer>
    </StyledTaskItem>

);import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import PenSvg from "../atoms/PenSvg";
import GarbageTrashSvg from "../atoms/GarbageTrashSvg";

const TaskItem = ({onClick, checkHandler, isChecked}) => (
    <StyledTaskItem>

            <label style={{background: "#45454C", color: "white"}}>
                <Checkbox checked={isChecked} onChange={checkHandler}/>
                <span style={{marginLeft: 8, background: "#45454C"}}>taskName</span>
            </label>


        <StyledBtnContainer>
            <Button onClick={onClick} children={<PenSvg/>}/>
            <Button onClick={onClick} children={<GarbageTrashSvg/>}/>
        </StyledBtnContainer>
    </StyledTaskItem>

);


export default TaskItem;

TaskItem.propTypes = {
    onClick: PropTypes.func,
    checkHandler: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
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




export default TaskItem;

TaskItem.propTypes = {
    onClick: PropTypes.func,
    checkHandler: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
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

