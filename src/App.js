import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import GlobalStyle from './GlobalStyle'

import { UserContext } from './UserContext'
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import Home from "./pages/Home/Home"
import NewEnter from "./pages/NewEnter/NewEnter"
import NewOut from "./pages/NewOut/NewOut"

function App() {

  const [info, setInfo] = useState({})
  const [historic, setHistoric] = useState([])

  return (
    <UserContext.Provider value={{ info, setInfo, historic, setHistoric }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={< SignIn  />} />
          <Route path="/cadastro" element={< SignUp />} />
          <Route path="/home" element={<  Home />} />
          <Route path="/nova-entrada" element={< NewEnter  />} />
          <Route path="/nova-saida" element={< NewOut />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;