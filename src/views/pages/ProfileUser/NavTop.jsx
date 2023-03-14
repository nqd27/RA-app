import React from 'react'
import { Link } from 'react-router-dom'
function NavTop() {
  return (
    <div className="navbar-top">
          <div className="title">
            <h1>Thông tin người dùng</h1>
          </div>

          <ul>
            <li>
              <a href="#message">
                <span className="icon-count">29</span>
                <i className="fa fa-envelope fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="#notification">
                <span className="icon-count">59</span>
                <i className="fa fa-bell fa-2x"></i>
              </a>
            </li>
            <li>
              <Link to='/'>
                <i className="fa fa-sign-out-alt fa-2x"></i>
              </Link>
            </li>
          </ul>
        </div>
  )
}

export default NavTop