import React from 'react'
import CottageIcon from '@mui/icons-material/Cottage';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link, Navigate } from 'react-router-dom'
import ViewListIcon from '@mui/icons-material/ViewList';
import CategoryIcon from '@mui/icons-material/Category';

const SideNav = () => {

    return (
        <>

            <div className="side-nav" id='sideNav'>
                <div className="logo">
                    <Link to='/'>
                        <img src="https://cdn.dribbble.com/userupload/2448240/file/original-9d958c1a2500b83f7b3f623bb14dfa0f.png?resize=400x0" alt="" />
                    </Link>
                </div>
                <div className="img-profile-side">
                    <img src="https://i.pinimg.com/736x/36/c2/b0/36c2b0f30a4b55e08374d71957c62118.jpg" alt="" />
                    <h5>ADMIN</h5>
                </div>

                <div className="select-routes">
                    <div className="route">
                        <Link className='icon'>
                            <div>
                                <CottageIcon />
                            </div>
                        </Link>
                        <ul id='text-link'>
                            <li>
                                <Link to='main'>Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="route">
                        <Link className='icon'>
                            <div>
                                <CottageIcon />
                            </div>
                        </Link>
                        <ul id='text-link'>
                            <li>
                                <Link to='user'>User</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="route">
                        <Link className='icon'>
                            <div>
                                <CottageIcon />
                            </div>
                        </Link>
                        <ul id='text-link'>
                            <li>
                                <Link to='product'>Product</Link>
                                
                            </li>
                            <li>
                            <Link to='product/add'>Add</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="route">
                        <Link className='icon'>
                            <div>
                                <CottageIcon />
                            </div>
                        </Link>
                        <ul id='text-link'>
                            <li>
                                <Link to='cart'>Đơn hàng</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="route">
                        <Link className='icon'>
                            <div>
                                <CottageIcon />
                            </div>
                        </Link>
                        <ul id='text-link'>
                            <li>
                                <Link to='statis'>Thống kê</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="route">
                        <Link className="icon">
                            <div >
                                <AccountBoxIcon />

                            </div>
                        </Link>
                        <Link id='text-link'>User</Link>
                    </div>
                    <div className="route">
                        <Link className="icon">
                            <div >
                                <CategoryIcon />

                            </div>
                        </Link>
                        <Link id='text-link'>Product</Link>
                    </div>
                    <div className="route">
                        <Link className="icon">
                            <div >
                                <ViewListIcon />

                            </div>
                        </Link>
                        <Link id='text-link'>Order</Link>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default SideNav