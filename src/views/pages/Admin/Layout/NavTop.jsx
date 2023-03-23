import React from 'react'
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';

const NavTop = () => {
    const [dropdownUser, setDropdownUser] = useState(false)
    const menuList = () => {
        let menuList = document.querySelector("#menu-List");
        let sideNave = document.querySelector("#sideNav");
        let mainAdmin = document.querySelector("#mainAdmin");
        let navTopMenu = document.querySelector("#navTopMenu");

        // console.log(menuList.className)
        if (menuList.className == 'icon-menu') {
            menuList.className = 'icon-menu-action'
            sideNave.className = 'side-nav-action'
            mainAdmin.className = 'main-admin-action'
            navTopMenu.className = 'nav-top-menu-action'
        } else {
            document.querySelector('.icon-menu-action').className = 'icon-menu'
            document.querySelector('.side-nav-action').className = 'side-nav'
            document.querySelector('.main-admin-action').className = 'main-admin'
            document.querySelector('.nav-top-menu-action').className = 'nav-top-menu'
        }

    }

    const dropdown = () => {
        if (!dropdownUser) {
            let dropdown = document.querySelector("#dropdown");
            dropdown.style.display = 'flex';
            setDropdownUser(true)
        } else {
            let dropdown = document.querySelector("#dropdown");
            dropdown.style.display = 'none';
            setDropdownUser(false)
        }

    }

  return (
    <>
        <div className="nav-top">
                    <div className="icon-menu" id='menu-List' onClick={menuList}>
                        <ListIcon style={{ fontSize: '40px', color: 'rgba(127, 255, 212, 1)', marginTop: '18px' }} />
                    </div>
                    <div className="nav-top-menu" id='navTopMenu'>
                        <div className="filter">
                            <label htmlFor="filters"><SearchIcon style={{ color: 'rgba(77, 77, 77, 0.471)', marginTop: '15px' }} /></label>
                            <input type="text" id='filters' />
                        </div>
                        <div className="action-nav-menu-top">
                            <div className="title-profile">
                                <img src="https://i.pinimg.com/736x/36/c2/b0/36c2b0f30a4b55e08374d71957c62118.jpg" alt="AnhDaiDien" />
                                <h3 onClick={dropdown}>ADMIN
                                    <ul id='dropdown'>
                                        <li>LOG OUT</li>
                                    </ul>
                                </h3>
                            </div>
                            <div className="message-nav-top">
                                <MailIcon /><h4>Message</h4>
                            </div>
                            <div className="message-nav-top">
                                <NotificationsActiveIcon /><h4>Notifications</h4>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default NavTop