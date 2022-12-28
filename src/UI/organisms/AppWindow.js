import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

const StyledAppWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  min-height: 400px;
  border-radius: 15px;
  background: ${props => props.background || "#262631"};
`;


const AppWindow = ({children}) => {
    return (
        <StyledAppWindow>
            <Title text="Things to do"/>
            <Button>Active</Button>
        </StyledAppWindow>
    );
};


AppWindow.prototype = {
    children: PropTypes.node.isRequired
}

export default AppWindow;