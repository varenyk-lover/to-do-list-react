import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoonSvg from "../atoms/MoonSvg";
import SunSvg from "../atoms/SunSvg";

const ThemeToggler = ({toggleTheme, isChecked}) => (
    <StyledTogglerContainer>
        <StyledToggler>
            <HiddenCheckbox type="checkbox" onChange={toggleTheme} checked={isChecked} name="toggler"/>

            <StyledLabel>
                <StyledBox>

                    <StyledBall/>

                    <StyledScenary>

                        <SunSvg/>
                        <MoonSvg/>
                    </StyledScenary>

                </StyledBox>
            </StyledLabel>
        </StyledToggler>
    </StyledTogglerContainer>
);

export default ThemeToggler;


ThemeToggler.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired
};

const StyledTogglerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: transparent;
`;

const StyledToggler = styled.div`
  margin-bottom: 15px;
  background: transparent;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;


const StyledLabel = styled.label`

`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 120px;
  height: 60px;
  background-color: ${({theme}) => theme.titleColor};
  transition: all 1s ease;
  position: relative;
  border-radius: 30px;
  cursor: pointer;

  :hover {
    //background-color: white;
    cursor: pointer;
    //transition-delay: 0s;
    //transition-property: none;
  }
`;


const StyledBall = styled.div`
  width: 60px;
  height: 60px;
  background-color: #919191;
  transition: all 1s ease;
  position: absolute;
  border-radius: 50%;
  //border: 3px solid black;
  transform: ${({checked}) => checked ? 'translatex(100%);' : 'translatex(0%);'};
`;

const StyledScenary = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 1s ease;
  padding: 5px 10px;
`;

