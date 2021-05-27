import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themeObj from "./theme";


ReactDOM.render(
  <Router>
    <ThemeProvider theme={themeObj}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

