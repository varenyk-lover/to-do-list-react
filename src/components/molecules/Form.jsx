import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const Form = ({onChangeHandler, placeholder, input, handleSubmit, onClick, text}) => (
    <StyledForm onSubmit={handleSubmit}>
        <Input type="text" onChange={onChangeHandler} value={input} placeholder="Add new item"/>
        <Button onClick={onClick} text="Add" type="submit"/>
    </StyledForm>
);


export default Form;


Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}


const StyledForm = styled.form`
  background: ${({bgColor}) => bgColor || "#262631"};
`;
