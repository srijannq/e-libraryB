import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Side.css';
import {Bs0Square, Bs123, BsBackpack2, BsBook, BsBookFill, BsBookmark, BsBookmarkFill, BsCart3,BsFillGearFill,BsFillGrid3X3GapFill,BsGrid1X2Fill,BsPersonCircle, BsSquareFill} from 'react-icons/bs';
function Sidebar({openSidebarToggle,OpenSidebar}){
  return (
    <>
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""}>
    <div className='sidebar-title'>
    <div className='sidebar-brand'>
    <BsBook className='icon-header'/>E-library&nbsp;&nbsp;&nbsp;<span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>
    
    </div>
    <ul className='sidebar-list'>
      <li className='sidebar-list-item'>
        <a href="">
          <BsGrid1X2Fill className='icon'/>Dashboard
          </a>
      </li>
      <li className='sidebar-list-item'>
      <a href="">
      <BsPersonCircle className='icon'/>Register
      </a>
          </li>
          <li className='sidebar-list-item'>
        <a href="">
        <BsPersonCircle className='icon'/>Login
          </a>
          </li>
          <li className='sidebar-list-item'>
        <a href="">
          <BsBookFill className='icon'/>Books Available
          </a>
          </li>
          <li className='sidebar-list-item'>
        <a href="">
          <BsFillGrid3X3GapFill className='icon'/>Categories
          </a>
          </li>
          <li className='sidebar-list-item'>
        <a href="">
          <BsBookFill className='icon'/>Books Borrowed
          </a>
          </li>
          <li className='sidebar-list-item'>
        <a href="">
          <BsFillGearFill className='icon'/>Settings
          </a>
          </li>
          
    </ul>
    </aside>

    </>

  )
}

export default Sidebar
