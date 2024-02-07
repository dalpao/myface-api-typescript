import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './post.css' // importing css file

 
 
 export function NavLink (){
 return(
    <div>
        <p> testinjfdjgka</p>  
        <a className='linktag' href="/posts">Posts</a>
        <a className='linktag' href="/users/58">Users</a>

  <Link className='linktag' to="/posts"/>
  <Link className='linktag' to="/users/58"/>
  </div>
 
 );
};