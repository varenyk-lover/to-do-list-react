import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const Form = ({handleSubmit, handleChange, value, text, placeholder}) => (
    <StyledForm onSubmit={handleSubmit}>
        <Input handleChange={handleChange} value={value} type="text" name="title"
               placeholder={placeholder}/>
        <Button isPrimary type="submit" text={text}/>
    </StyledForm>
);


export default Form;


Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    text: PropTypes.string,
}

const StyledForm = styled.form`
  background: ${({bgColor}) => bgColor || "#262631"};
  display: flex;


  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
