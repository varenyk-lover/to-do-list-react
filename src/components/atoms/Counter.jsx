import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Counter = ({amountOfAllTasks, amountOfDoneTasks}) => (
    <StyledCounter>{amountOfDoneTasks || 0} from {amountOfAllTasks || 0} done</StyledCounter>
);


export default Counter;


Counter.propTypes = {
    amountOfAllTasks: PropTypes.number,
    amountOfDoneTasks: PropTypes.number,
}


const StyledCounter = styled.p`
  background: ${({bgColor}) => bgColor || "#45454C"};
  color: ${({color}) => color || "white"};
`;