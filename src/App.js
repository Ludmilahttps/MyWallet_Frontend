import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import UserContext from '../src/UserContext'
import GlobalStyle from './GlobalStyle'

import SignIn from "./pages/signin/signin"
import SignUp from "./pages/signup/signup"

function App() {

  const [info, setInfo] = useState([])
  const [habits, setHabits] = useState([])
  const [todayData, setTodayData] = useState([])
  const [percent, setPercent] = useState(0)
  const [sidebar, setSidebar] = useState(false)

  return (
    <UserContext.Provider value={{ info, setInfo, sidebar, setSidebar, habits, setHabits, todayData, setTodayData, percent, setPercent}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={< SignIn />} />
          <Route path="/cadastro" element={< SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider >
  );
}

export default App;