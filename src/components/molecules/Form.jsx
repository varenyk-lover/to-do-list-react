import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const Form = ({handleSubmit, handleChange, input}) => (
    <StyledForm onSubmit={handleSubmit}>
        <Input handleChange={handleChange} input={input} type="text" placeholder="Add new item"/>
        <Button type="submit" text="Add"/>
    </StyledForm>
);


export default Form;


Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
}


const StyledForm = styled.form`
  background: ${({bgColor}) => bgColor || "#262631"};
`;
