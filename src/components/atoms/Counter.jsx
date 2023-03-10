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
  padding: 15px 0 15px 0;
  background: transparent;
  color: #919191;
  font-size: 23px;
  text-align: center;

  @media only screen and (max-width: 1200px) {
    font-size: 18px;
  }
`;
