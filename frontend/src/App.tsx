import { useEffect, useState } from 'react'
import './App.css'
import { PostModel } from './models/api/postModel'
import { Postlists } from './component/Postlists'
import { UserDetail } from './component/UserDetail'
import { UserModel } from './models/api/userModel'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { NavLink } from './component/Navlink'


function App() {
  
 

  return (
    <>
  <Router>
    <h1>Myface api- Typescript</h1>
    
    <Routes>
      
      <Route path="*" element={<NavLink />}/>
      <Route path="/posts" element={<Postlists /> }/>
    <Route path="/users/58" element={<UserDetail /> }/>
  
  </Routes>
</Router>
  </>
  )
}

export default App



