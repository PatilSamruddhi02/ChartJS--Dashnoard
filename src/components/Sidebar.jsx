import React from 'react'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'
  import { FaHome, FaInfoCircle, FaChartLine, FaList, FaUser, FaCog, FaEnvelope, FaBell, FaCalendar, FaQuestionCircle, FaShoppingCart } from "react-icons/fa"; // Import icons from react-icons library

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
           
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <div className="logo">
        
        <h1> ADMIN</h1>

        <h1>Nishank Shingh</h1>
        </div>
        <ul className="sidebar__menu">
        <li className="sidebar__item">
          <FaHome className="sidebar__icon" />
          <a href="#" className="sidebar__link">Home</a>
        </li>
        <li className="sidebar__item">
          <FaInfoCircle className="sidebar__icon" />
          <a href="#" className="sidebar__link">About</a>
        </li>
        <li className="sidebar__item">
          <FaChartLine className="sidebar__icon" />
          <a href="#" className="sidebar__link">Analytics</a>
        </li>
        <li className="sidebar__item">
          <FaList className="sidebar__icon" />
          <a href="#" className="sidebar__link">Product List</a>
        </li>
        <li className="sidebar__item">
          <FaUser className="sidebar__icon" />
          <a href="#" className="sidebar__link">Profile</a>
        </li>
        <li className="sidebar__item">
          <FaCog className="sidebar__icon" />
          <a href="#" className="sidebar__link">Settings</a>
        </li>
        <li className="sidebar__item">
          <FaEnvelope className="sidebar__icon" />
          <a href="#" className="sidebar__link">Inbox</a>
        </li>
        <li className="sidebar__item">
          <FaBell className="sidebar__icon" />
          <a href="#" className="sidebar__link">Notifications</a>
        </li>
        <li className="sidebar__item">
          <FaCalendar className="sidebar__icon" />
          <a href="#" className="sidebar__link">Calendar</a>
        </li>
        <li className="sidebar__item">
          <FaShoppingCart className="sidebar__icon" />
          <a href="#" className="sidebar__link">Orders</a>
        </li>
        <li className="sidebar__item">
          <FaQuestionCircle className="sidebar__icon" />
          <a href="#" className="sidebar__link">Help</a>
        </li>
        {/* Add more fields here */}
      </ul>
    </aside>
  )
}

export default Sidebar