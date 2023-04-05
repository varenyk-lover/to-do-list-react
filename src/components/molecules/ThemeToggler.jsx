import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoonSvg from "../atoms/MoonSvg";
import SunSvg from "../atoms/SunSvg";

const ThemeToggler = ({handleToggler, isToggled, toggleTheme}) => {

    return (
        <StyledTogglerContainer>
            <StyledToggler>
                <HiddenCheckbox id="check" type="checkbox" toggleTheme={toggleTheme} onChange={handleToggler}
                                checked={isToggled}
                                name="toggler"/>

                <label htmlFor="check">
                    <StyledBox>

                        <StyledBall checked={isToggled}/>

                        <StyledScenary>

                            <SunSvg/>
                            <MoonSvg/>
                        </StyledScenary>

                    </StyledBox>
                </label>
            </StyledToggler>
        </StyledTogglerContainer>
    );
};

export default ThemeToggler;


ThemeToggler.propTypes = {
    handleToggler: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    isToggled: PropTypes.bool.isRequired
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
  transform: ${({checked}) => checked ? "translateX(0%);" : "translateX(100%);"};
`;

const StyledScenary = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 1s ease;
  padding: 5px 10px;
`;

