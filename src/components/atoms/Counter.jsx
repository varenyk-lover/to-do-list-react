
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Counter = ({amountOfAllTasks, amountOfDoneTasks}) => (
    <StyledCounter>{amountOfDoneTasks} from {amountOfAllTasks} done</StyledCounter>
);


export default Counter;


Counter.propTypes = {
    amountOfAllTasks: PropTypes.number.isRequired,
    amountOfDoneTasks: PropTypes.number.isRequired,
}

Counter.defaultProps = {
    amountOfAllTasks: 0,
    amountOfDoneTasks: 0,
}


const StyledCounter = styled.p`
  background: ${({bgColor}) => bgColor || "#45454C"};
  color: ${({color}) => color || "white"};
`;
