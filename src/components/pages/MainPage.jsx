import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../atoms/Input";
import Counter from "../atoms/Counter";
import Title from "../atoms/Title";
import Filter from "../molecules/Filter";
import Form from "../molecules/Form";
import TaskList from "../organisms/TaskList";

const MainPage = () => {

    return (
        <StyledMainPage>
            <Title title="Things to do"/>
            <Counter/>
            <Input type="text" placeholder="Search"/>
            <Filter/>
            <TaskList/>
            <Form/>
        </StyledMainPage>
    )
};

export default MainPage;

MainPage.propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}


const StyledMainPage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background-color: #262631;
  border-radius: 15px;
  box-shadow: /* offset-x | offset-y | blur-radius | spread-radius | color */ 0px 12px 17px 2px hsla(0, 0%, 0%, 0.14),
  0px 5px 22px 4px hsla(0, 0%, 0%, 0.12),
  0px 7px 8px -4px hsla(0, 0%, 0%, 0.2);


  @media only screen and (max-width: 1680px) {
    width: 50%;
  }

  @media only screen and (max-width: 992px) {
    width: 60%;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;