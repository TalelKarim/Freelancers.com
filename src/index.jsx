import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home.jsx'
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import Survey  from './pages/Survey/Survey.jsx'
import Header from './Components/Header/index'
import Error from './Components/Error/Error.jsx'
import Results from './pages/Results/index.jsx'
import Freelance from './pages/Freelancers/index.jsx'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

ReactDOM.render(
  <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/Result">
                    <Results />
                </Route>

                <Route path="/freelance">
                    <Freelance />
                </Route>


                <Route path="/survey/:questionNumber">
                    <Survey />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </Router>
  </React.StrictMode>,
document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
