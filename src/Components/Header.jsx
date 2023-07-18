import React , {useState} from 'react'
import "../index.css"
import Logo from "../Images/attachment_126252018.png"
import {Link} from "react-router-dom"

const Header = ()=>{
  const [btnNameReact, setBtnNameReact] = useState("Login")
    return <>
    <div className="header flex">
      <div className="logo-container">
           <img className='logo' src={Logo} width="100px" height="80px"/>
      </div>
  <div className="nav-items">
  <ul className='flex-justify list'>
    <li>
      <Link className='link-styling' to="/">Home</Link>
    </li>
    <li>
    <Link className='link-styling' to="/about">About Us</Link>
    </li>
    <li>
    <Link className='link-styling' to="/contact">Contact Us</Link>
    </li>
    <li>
    <Link className='link-styling' to="/contact">Cart</Link>
    </li>
    <li>
    <button className='login' onClick={()=>{
   btnNameReact ==="Login"?  setBtnNameReact("Logout") : setBtnNameReact("Login")
  }}>{btnNameReact}</button>
    </li>
  </ul>
  
  </div>
     
    </div>
  
    </>
  }

  export default Header;