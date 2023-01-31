import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const Form = ({handleSubmit, onChangeHandler, placeholder, input, onClick, text}) => (
    <StyledForm onSubmit={handleSubmit}>
        <Input type="text" onChange={onChangeHandler} value={input} placeholder="Add new item"/>
        <Button onClick={onClick} text="Add" type="submit"/>
    </StyledForm>
);


export default Form;


Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}


const StyledForm = styled.form`
  background: ${({bgColor}) => bgColor || "#262631"};
`;
