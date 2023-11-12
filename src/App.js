import React, {useState} from "react";
import MainPage from "./components/pages/MainPage";
import GlobalStyle from "./GlobalStyle";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./assets/theme/theme";


const App = () => {
    const [theme, setTheme] = useState("dark");
    const isDarkTheme = theme === "dark";

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <MainPage setTheme={setTheme} isDarkTheme={isDarkTheme}/>
        </ThemeProvider>
    );
};

export default App;