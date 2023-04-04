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
};


const StyledCounter = styled.p`
  padding: 15px 0 15px 0;
  background: transparent;
  color: ${({theme}) => theme.subtitleColor};
  font-size: 23px;
  text-align: center;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 18px;

  }
`;
