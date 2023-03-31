import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./GlobalStyle";
// import {ThemeProvider} from "styled-components";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>*/}
        <GlobalStyle/>
        <App/>
        {/*</ThemeProvider>*/}
    </React.StrictMode>
);