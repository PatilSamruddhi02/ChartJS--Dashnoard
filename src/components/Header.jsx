import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <div className="header">
<div className="logo">
<h2 className="sidebar__heading">Admin Dashboard</h2>
</div>

<div className="search-bar">
<input type="text" placeholder="Search..." />
</div>

<div className="logout">
<p>Logout</p>
</div>
</div>

  )
}

export default Header