import React from 'react'
import "./NavBar.css";
import logo from '../muthflix.png';
import search from '../search.svg';
import account from '../account.svg';
import settings from '../settings.svg';
import logout from '../logout.svg';

function NavBar() {
  return (
    <div className="navbar">
        <img className='logo' src={logo} alt="logo" />
        <div className='middle'>
          <span> Home  </span>
          <span> Series  </span>
          <span> Movies  </span>
          <span> New and Popular </span>
          <span> My List</span>
        </div>
        <div className="right-side">
     <span>  <img src={search} alt="search" /> </span>
     <span>  <img src={settings} alt="Settings" /> </span>
     <span>  <img src={account} alt="account" /> </span>
     <span>  <img src={logout} alt="Logout" /> </span>
       </div>
    </div>
  )
}

export default NavBar