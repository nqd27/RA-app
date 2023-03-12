import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {

    const [categoriesPlus,setcategoriesPlus] = useState(false)

    const cartMini = () => {
        let cart = document.querySelector("#ec-side-cart");
        // console.log(cart)
        cart.className = "ec-side-cart ec-open"
    }

    const closeMiniCart = () => {
        let cart = document.querySelector("#ec-side-cart");
        cart.className = "ec-side-cart"
    }

    const showCategories = () => {
        if(categoriesPlus == false){
            let categories = document.querySelector("#ec-category-menu");
            categories.style.display = "block"
            setcategoriesPlus(true)
        }else{
            let categories = document.querySelector("#ec-category-menu");
            categories.style.display = "none"
            setcategoriesPlus(false)
        }
        
    }
    return (
        <div>
            <header className="ec-header" style={{color: "white"}}>
                {/* <!--Ec Header Top Start --> */}
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* <!-- Header Top phone Start --> */}
                            <div className="col header-top-left">
                                {/* <!-- Social Start --> */}
                                <div className="header-top-social">
                                    <ul className="mb-0">
                                        <li className="list-inline-item"><a href="#"><i className="ecicon eci-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="ecicon eci-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="ecicon eci-linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="ecicon eci-twitter"></i></a></li>
                                    </ul>
                                </div>
                                {/* <!-- Social End --> */}
                            </div>
                            {/* <!-- Header Top phone End --> */}
                            {/* <!-- Header Top call Start --> */}
                            <div className="col header-top-center">
                                {/* <!-- Language Start --> */}
                                <div className="header-top-lan-curr header-top-lan dropdown">
                                    <button className="dropdown-toggle" data-bs-toggle="dropdown">English <i
                                        className="ecicon eci-angle-down" aria-hidden="true"></i></button>
                                    <ul className="dropdown-menu">
                                        <li className="active"><a className="dropdown-item" href="#">English</a></li>
                                        <li><a className="dropdown-item" href="#">Italiano</a></li>
                                    </ul>
                                </div>
                                {/* <!-- Language End --> */}
                                {/* <!-- Currency Start --> */}
                                <div className="header-top-lan-curr header-top-curr dropdown">
                                    <button className="dropdown-toggle" data-bs-toggle="dropdown">USD <i
                                        className="ecicon eci-angle-down" aria-hidden="true"></i></button>
                                    <ul className="dropdown-menu">
                                        <li className="active"><a className="dropdown-item" href="#">USD $</a></li>
                                        <li><a className="dropdown-item" href="#">EUR €</a></li>
                                    </ul>
                                </div>
                                {/* <!-- Currency End --> */}

                            </div>
                            {/* <!-- Header Top call End --> */}
                            {/* <!-- Header Top Language Currency --> */}
                            <div className="col header-top-right d-none d-lg-block">
                                <div className="header-top-right-inner d-flex justify-content-end">

                                    {/* <!-- Header User Start --> */}
                                    <div className="ec-header-user dropdown">
                                        <button className="dropdown-toggle" data-bs-toggle="dropdown"><img
                                            src="./src/assets/images/icons/user_5.svg" className="svg_img top_svg" alt="" /><span
                                                className="ec-btn-title">Đăng nhập</span></button>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li><Link to="/signup" className="dropdown-item" href="register.html">Đăng ký</Link></li>
                                            <li><a className="dropdown-item" href="checkout.html">Thanh toán</a></li>
                                            <li><a className="dropdown-item" href="login.html">Đăng nhập</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- Header User End --> */}
                                    {/* <!-- Header wishlist Start --> */}
                                    <div className="ec-header-wishlist">
                                        <a href="#">
                                            <div className="top-icon"><img src="./src/assets/images/icons/pro_wishlist.svg"
                                                className="svg_img top_svg" alt="" /></div>
                                            <span className="ec-btn-title">danh sách yêu thích</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Header Top Language Currency --> */}
                            {/* <!-- Header Top responsive Action --> */}
                            <div className="col header-top-res d-lg-none">
                                <div className="ec-header-bottons">
                                    {/* <!-- Header User Start --> */}
                                    <div className="ec-header-user dropdown">
                                        <button className="dropdown-toggle" data-bs-toggle="dropdown"><img
                                            src="./src/assets/images/icons/user_5.svg" className="svg_img header_svg" alt="" /></button>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li><a className="dropdown-item" href="register.html">Đăng ký</a></li>
                                            <li><a className="dropdown-item" href="checkout.html">Thanh toán</a></li>
                                            <li><a className="dropdown-item" href="login.html">Đăng nhập</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- Header User End --> */}
                                    {/* <!-- Header Cart Start --> */}
                                    <a href="#" className="ec-header-btn ec-header-wishlist">
                                        <div className="header-icon"><img src="./src/assets/images/icons/wishlist.svg"
                                            className="svg_img header_svg" alt="" /></div>
                                        <span className="ec-header-count ec-wishlist-count">0</span>
                                    </a>
                                    {/* <!-- Header Cart End --> */}
                                    {/* <!-- Header Cart Start --> */}
                                    <a href="#ec-side-cart" className="ec-header-btn ec-side-toggle">
                                        <div className="header-icon"><img src="./src/assets/images/icons/cart_5.svg"
                                            className="svg_img header_svg" alt="" /></div>
                                        <span className="ec-header-count ec-cart-count">0</span>
                                    </a>
                                    {/* <!-- Header Cart End --> */}
                                    {/* <!-- Header menu Start --> */}
                                    <a href="#ec-mobile-menu" className="ec-header-btn ec-side-toggle d-lg-none">
                                        <i className="ecicon eci-bars"></i>
                                    </a>
                                    {/* <!-- Header menu End --> */}
                                </div>
                            </div>

                            {/* <!-- Header Top responsive Action --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Ec Header Top  End --> */}
                {/* <!-- Ec Header Bottom  Start --> */}
                <div className="ec-header-bottom d-none d-lg-block">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="ec-flex">
                                {/* <!-- Ec Header Logo Start --> */}
                                <div className="align-self-center ec-header-logo ">
                                    <div className="header-logo">
                                        <a href="index.html"><img src="./src/assets/images/logo/logo-5.png" alt="Site Logo" /><img
                                            className="dark-logo" src="./src/assets/images/logo/dark-logo-5.png" alt="Site Logo"
                                        /></a>
                                    </div>
                                </div>
                                {/* <!-- Ec Header Logo End --> */}

                                {/* <!-- Ec Header Search Start --> */}
                                <div className="align-self-center ec-header-search">
                                    <div className="header-search">
                                        <form className="ec-search-group-form" action="#">
                                            <div className="ec-search-select-inner">
                                                <div className="ec-search-cat-title">Tất cả</div>
                                                <ul className="ec-search-cat-block">
                                                    <li><a href="#">Điện thoại</a></li>
                                                    <li><a href="#">Balô gaming</a></li>
                                                    <li><a href="#">Tai nghe</a></li>
                                                </ul>
                                            </div>
                                            <input className="form-control" placeholder="Tìm kiếm ở đây..." type="text" />
                                            <button className="search_submit" type="submit"><i className="ecicon eci-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- Ec Header Search End --> */}

                                {/* <!-- Ec Header Button Start --> */}
                                <div className="align-self-center ec-header-bottons">
                                    <div className="ec-header-bottons">

                                        {/* <!-- Header wishlist End --> */}
                                        {/* <!-- Header Cart Start --> */}
                                        <a  className="ec-header-btn ec-side-toggle" onClick={cartMini}>
                                            <div className="header-icon"><img src="./src/assets/images/icons/cart_5.svg"
                                                className="svg_img header_svg" alt="" /></div>
                                            <span className="ec-btn-title"><span className="ec-cart-count">0</span> sản phẩm - $0.00</span>

                                        </a>
                                        {/* <!-- Header Cart End --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Ec Header Button End --> */}
                {/* <!-- Header responsive Bottom  Start --> */}
                <div className="ec-header-bottom d-lg-none">
                    <div className="container position-relative">
                        <div className="row ">

                            {/* <!-- Ec Header Logo Start --> */}
                            <div className="col">
                                <div className="header-logo">
                                    <a href="index.html"><img src="./src/assets/images/logo/logo-5.png" alt="Site Logo" /><img
                                        className="dark-logo" src="./src/assets/images/logo/dark-logo-5.png" alt="Site Logo"
                                    /></a>
                                </div>
                            </div>
                            {/* <!-- Ec Header Logo End --> */}
                            {/* <!-- Ec Header Search Start --> */}
                            <div className="col align-self-center ec-header-search">
                                <div className="header-search">
                                    <form className="ec-search-group-form" action="#">
                                        <div className="ec-search-select-inner">
                                            <div className="ec-search-cat-title">Tất cả</div>
                                            <ul className="ec-search-cat-block">
                                                <li><a href="#">Điện thoại</a></li>
                                                <li><a href="#">Balô gaming</a></li>
                                                <li><a href="#">Tai nghe</a></li>
                                            </ul>
                                        </div>
                                        <input className="form-control" placeholder="Search Here..." type="text" />
                                        <button className="search_submit" type="submit"><i className="ecicon eci-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- Ec Header Search End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Header responsive Bottom  End --> */}
                {/* <!-- EC Main Menu Start --> */}
                <div id="ec-main-menu-desk" className="sticky-nav">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col ec-category-block">
                                <div className="ec-cat-menu">
                                    <div className="ec-category-toggle" onClick={showCategories}>
                                        <span className="ec-category-icon"></span>
                                        <span className="ec-category-title">tất cả các danh mục</span>
                                    </div>
                                    <div className="ec-category-content">
                                        <div id="ec-category-menu" className="ec-category-menu">
                                            <ul className="ec-category-wrapper" id='categories'>
                                                <li><a title="" className="ec-cat-menu-link" href="#">Điện thoại</a></li>
                                                <li><a title="" className="ec-cat-menu-link" href="#">Phụ kiện điện thoại</a></li>
                                                <li><a title="" className="ec-cat-menu-link" href="#">PC</a></li>
                                                <li><a title="" className="ec-cat-menu-link" href="#">Phụ kiện PC</a></li>
                                                <li><a title="" className="ec-cat-menu-link" href="#">Laptop</a></li>
                                                <li><a title="" className="ec-cat-menu-link" href="#">Tai cầm</a></li>
                                                <li><a title="" className="ec-cat-menu-link" href="#">Tai nghe</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col ec-main-menu-block align-self-center d-none d-lg-block p-0">
                                <div className="ec-main-menu">
                                    <ul>
                                        <li className="dropdown"><a>Trang chủ</a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Fashion 1</a></li>
                                                <li><a href="demo-2.html">Fashion 2</a></li>
                                                <li><a href="demo-3.html">Furniture</a></li>
                                                <li><a href="demo-4.html">Mix products</a></li>
                                                <li><a href="demo-5.html">Electronic</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><a >Danh mục</a>
                                            <ul className="mega-menu d-block">
                                                <li className="d-flex">
                                                    <ul className="d-block">
                                                        <li className="menu_title"><a >classNameic</a></li>
                                                        <li><a href="shop-left-sidebar-col-3.html">Left sidebar 3 column</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar-col-4.html">Left sidebar 4 column</a>
                                                        </li>
                                                        <li><a href="shop-right-sidebar-col-3.html">Right sidebar 3 column</a>
                                                        </li>
                                                        <li><a href="shop-right-sidebar-col-4.html">Right sidebar 4 column</a>
                                                        </li>
                                                        <li><a href="shop-full-width.html">Full width 4 column</a></li>
                                                    </ul>
                                                    <ul className="d-block">
                                                        <li className="menu_title"><a >Banner</a></li>
                                                        <li><a href="shop-banner-left-sidebar-col-3.html">left sidebar 3
                                                            column</a></li>
                                                        <li><a href="shop-banner-left-sidebar-col-4.html">left sidebar 4
                                                            column</a></li>
                                                        <li><a href="shop-banner-right-sidebar-col-3.html">right sidebar
                                                            3 column</a></li>
                                                        <li><a href="shop-banner-right-sidebar-col-4.html">right sidebar
                                                            4 column</a></li>
                                                        <li><a href="shop-banner-full-width.html">Full width 4 column</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="d-block">
                                                        <li className="menu_title"><a >Columns</a></li>
                                                        <li><a href="shop-full-width-col-3.html">3 Columns full width</a></li>
                                                        <li><a href="shop-full-width-col-4.html">4 Columns full width</a></li>
                                                        <li><a href="shop-full-width-col-5.html">5 Columns full width</a></li>
                                                        <li><a href="shop-full-width-col-6.html">6 Columns full width</a></li>
                                                        <li><a href="shop-banner-full-width-col-3.html">Banner 3 Columns</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="d-block">
                                                        <li className="menu_title"><a >List</a>
                                                        </li>
                                                        <li><a href="shop-list-left-sidebar.html">Shop left sidebar</a></li>
                                                        <li><a href="shop-list-right-sidebar.html">Shop right sidebar</a></li>
                                                        <li><a href="shop-list-banner-left-sidebar.html">Banner left sidebar</a>
                                                        </li>
                                                        <li><a href="shop-list-banner-right-sidebar.html">Banner right
                                                            sidebar</a></li>
                                                        <li><a href="shop-list-full-col-2.html">Full width 2 columns</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className="ec-main-banner w-100">
                                                        <li><a className="p-0" href="shop-left-sidebar-col-3.html"><img
                                                            className="img-responsive" src="./src/assets/images/menu-banner/1.jpg"
                                                            alt="" /></a></li>
                                                        <li><a className="p-0" href="shop-left-sidebar-col-4.html"><img
                                                            className="img-responsive" src="./src/assets/images/menu-banner/2.jpg"
                                                            alt="" /></a></li>
                                                        <li><a className="p-0" href="shop-right-sidebar-col-3.html"><img
                                                            className="img-responsive" src="./src/assets/images/menu-banner/3.jpg"
                                                            alt="" /></a></li>
                                                        <li><a className="p-0" href="shop-right-sidebar-col-4.html"><img
                                                            className="img-responsive" src="./src/assets/images/menu-banner/4.jpg"
                                                            alt="" /></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a >Sản phẩm</a>
                                            <ul className="sub-menu">
                                                <li className="dropdown position-static"><a >Product page
                                                    <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="product-gallery-full-width.html">Product left sidebar</a></li>
                                                        <li><a href="product-right-sidebar.html">Product right sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown position-static"><a >Product 360
                                                    <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="product-360-left-sidebar.html">360 left sidebar</a></li>
                                                        <li><a href="product-360-right-sidebar.html">360 right sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown position-static"><a >Product video
                                                    <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="product-video-left-sidebar.html">Video left sidebar</a>
                                                        </li>
                                                        <li><a href="product-video-right-sidebar.html">Video right sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown position-static"><a >Product
                                                    gallery
                                                    <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="product-gallery-left-sidebar.html">Gallery left sidebar</a>
                                                        </li>
                                                        <li><a href="product-gallery-right-sidebar.html">Gallery right
                                                            sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="product-full-width.html">Product full width</a></li>
                                                <li><a href="product-360-full-width.html">360 full width</a></li>
                                                <li><a href="product-video-full-width.html">Video full width</a></li>
                                                <li><a href="product-gallery-full-width.html">Gallery full width</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a >Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="about-us.html">About Us</a></li>
                                                <li><a href="contact-us.html">Contact Us</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="compare.html">Compare</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="register.html">Register</a></li>
                                                <li><a href="track-order.html">Track Order</a></li>
                                                <li><a href="terms-condition.html">Terms Condition</a></li>
                                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><span className="main-label-note-new" data-toggle="tooltip"
                                            title="NEW"></span><a >Khác</a>
                                            <ul className="sub-menu">
                                                <li className="dropdown position-static"><a >Mail
                                                    Confirmation
                                                    <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="email-template-confirm-1.html">Mail Confirmation 1</a></li>
                                                        <li><a href="email-template-confirm-2.html">Mail Confirmation 2</a></li>
                                                        <li><a href="email-template-confirm-3.html">Mail Confirmation 3</a></li>
                                                        <li><a href="email-template-confirm-4.html">Mail Confirmation 4</a></li>
                                                        <li><a href="email-template-confirm-5.html">Mail Confirmation 5</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown position-static"><a >Mail Reset
                                                    <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="email-template-forgot-password-1.html">Reset password 1</a>
                                                        </li>
                                                        <li><a href="email-template-forgot-password-2.html">Reset password 2</a>
                                                        </li>
                                                        <li><a href="email-template-forgot-password-3.html">Reset password 3</a>
                                                        </li>
                                                        <li><a href="email-template-forgot-password-4.html">Reset password 4</a>
                                                        </li>
                                                        <li><a href="email-template-forgot-password-5.html">Reset password 5</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown position-static"><a >Mail
                                                    Promotional
                                                    <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="email-template-offers-1.html">Offer mail 1</a></li>
                                                        <li><a href="email-template-offers-2.html">Offer mail 2</a></li>
                                                        <li><a href="email-template-offers-3.html">Offer mail 3</a></li>
                                                        <li><a href="email-template-offers-4.html">Offer mail 4</a></li>
                                                        <li><a href="email-template-offers-5.html">Offer mail 5</a></li>
                                                        <li><a href="email-template-offers-6.html">Offer mail 6</a></li>
                                                        <li><a href="email-template-offers-7.html">Offer mail 7</a></li>
                                                        <li><a href="email-template-offers-8.html">Offer mail 8</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown position-static">
                                                    <span className="label-note-hot"></span>
                                                    <a >Vendor account
                                                        <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                                        <li><a href="vendor-profile.html">Vendor Profile</a></li>
                                                        <li><a href="vendor-uploads.html">Vendor Uploads</a></li>
                                                        <li><a href="vendor-settings.html">Vendor Settings</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown position-static">
                                                    <span className="label-note-trending"></span>
                                                    <a >User account
                                                        <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="user-profile.html">User Profile</a></li>
                                                        <li><a href="user-history.html">History</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="track-order.html">Track Order</a></li>
                                                        <li><a href="user-invoice.html">Invoice</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown position-static"><a >Construction
                                                    pages
                                                    <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="404-error-page.html">404 error page</a></li>
                                                        <li><a href="under-maintenance.html">maintanence page</a></li>
                                                        <li><a href="coming-soon.html">Coming soon page</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown position-static">
                                                    <span className="label-note-new"></span>
                                                    <a >Vendor Catalog
                                                        <i className="ecicon eci-angle-right"></i></a>
                                                    <ul className="sub-menu sub-menu-child">
                                                        <li><a href="catalog-single-vendor.html">Catalog Single Vendor</a></li>
                                                        <li><a href="catalog-multi-vendor.html">Catalog Multi Vendor</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a >Tin tức</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog-left-sidebar.html">left sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">right sidebar</a></li>
                                                <li><a href="blog-detail-left-sidebar.html">detail left sidebar</a></li>
                                                <li><a href="blog-detail-right-sidebar.html">detail right sidebar</a></li>
                                                <li><a href="blog-full-width.html">full width</a></li>
                                                <li><a href="blog-detail-full-width.html">detail full width</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a >Yếu tố</a>
                                            <ul className="sub-menu">
                                                <li><a href="elemets-products.html">Products</a></li>
                                                <li><a href="elemets-typography.html">Typography</a></li>
                                                <li><a href="elemets-title.html">Titles</a></li>
                                                <li><a href="elemets-categories.html">Categories</a></li>
                                                <li><a href="elemets-buttons.html">Buttons</a></li>
                                                <li><a href="elemets-tabs.html">Tabs</a></li>
                                                <li><a href="elemets-accordions.html">Accordions</a></li>
                                                <li><a href="elemets-blog.html">Blogs</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col ec-spe-offer-block">
                                <div className="ec-spe-offer-link">
                                    <a href="offer.html" className="ec-spe-offer-title">Ưu đãi đặc biệt</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Ec Main Menu End --> */}
                {/* <!-- tco Menu Start --> */}
                <div id="ec-mobile-menu" className="ec-side-cart ec-mobile-menu">
                    <div className="ec-menu-title">
                        <span className="menu_title">Menu của tôi</span>
                        <button className="ec-close">×</button>
                    </div>
                    <div className="ec-menu-inner">
                        <div className="ec-menu-content">
                            <ul>
                                <li><a >Trang chủ</a>
                                    <ul className="sub-menu">
                                        <li><a href="index.html">Fashion 1</a></li>
                                        <li><a href="demo-2.html">Fashion 2</a></li>
                                        <li><a href="demo-3.html">Furniture</a></li>
                                        <li><a href="demo-4.html">Mix products</a></li>
                                        <li><a href="demo-5.html">Electronic</a></li>
                                    </ul>
                                </li>

                                <li><a >Danh mục</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a >classNameic Variation</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop-left-sidebar-col-3.html">Left sidebar 3 column</a></li>
                                                <li><a href="shop-left-sidebar-col-4.html">Left sidebar 4 column</a></li>
                                                <li><a href="shop-right-sidebar-col-3.html">Right sidebar 3 column</a></li>
                                                <li><a href="shop-right-sidebar-col-4.html">Right sidebar 4 column</a></li>
                                                <li><a href="shop-full-width.html">Full width 4 column</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a >classNameic Variation</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop-banner-left-sidebar-col-3.html">Banner left sidebar 3
                                                    column</a></li>
                                                <li><a href="shop-banner-left-sidebar-col-4.html">Banner left sidebar 4
                                                    column</a></li>
                                                <li><a href="shop-banner-right-sidebar-col-3.html">Banner right sidebar 3
                                                    column</a></li>
                                                <li><a href="shop-banner-right-sidebar-col-4.html">Banner right sidebar 4
                                                    column</a></li>
                                                <li><a href="shop-banner-full-width.html">Banner Full width 4 column</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a >Biến thể Cột</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop-full-width-col-3.html">3 Columns full width</a></li>
                                                <li><a href="shop-full-width-col-4.html">4 Columns full width</a></li>
                                                <li><a href="shop-full-width-col-5.html">5 Columns full width</a></li>
                                                <li><a href="shop-full-width-col-6.html">6 Columns full width</a></li>
                                                <li><a href="shop-banner-full-width-col-3.html">Banner 3 Columns</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a >Biến thể danh sách</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop-list-left-sidebar.html">Shop left sidebar</a></li>
                                                <li><a href="shop-list-right-sidebar.html">Shop right sidebar</a></li>
                                                <li><a href="shop-list-banner-left-sidebar.html">Banner left sidebar</a></li>
                                                {/* <li><a href="shop-list-banner-right-sidebar.html">Banner right sidebar</a></li> */}
                                                <li><a href="shop-list-full-col-2.html">Full width 2 columns</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="p-0" href="shop-left-sidebar-col-3.html"><img className="img-responsive"
                                            src="./src/assets/images/menu-banner/1.jpg" alt="" /></a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a >Sản phẩm</a>
                                    <ul className="sub-menu">
                                        <li><a >Product page</a>
                                            <ul className="sub-menu">
                                                <li><a href="product-gallery-full-width.html">Product left sidebar</a></li>
                                                <li><a href="product-right-sidebar.html">Product right sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a >Product 360</a>
                                            <ul className="sub-menu">
                                                <li><a href="product-360-left-sidebar.html">360 left sidebar</a></li>
                                                <li><a href="product-360-right-sidebar.html">360 right sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a >Product vodeo</a>
                                            <ul className="sub-menu">
                                                <li><a href="product-video-left-sidebar.html">vodeo left sidebar</a></li>
                                                <li><a href="product-video-right-sidebar.html">vodeo right sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a >Product gallery</a>
                                            <ul className="sub-menu">
                                                <li><a href="product-gallery-left-sidebar.html">Gallery left sidebar</a></li>
                                                <li><a href="product-gallery-right-sidebar.html">Gallery right sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="product-full-width.html">Product full width</a></li>
                                        <li><a href="product-360-full-width.html">360 full width</a></li>
                                        <li><a href="product-video-full-width.html">Video full width</a></li>
                                        <li><a href="product-gallery-full-width.html">Gallery full width</a></li>
                                    </ul>
                                </li>
                                <li><a >Khác</a>
                                    <ul className="sub-menu">
                                        <li><a >Mail Confirmation</a>
                                            <ul className="sub-menu">
                                                <li><a href="email-template-confirm-1.html">Mail Confirmation 1</a></li>
                                                <li><a href="email-template-confirm-2.html">Mail Confirmation 2</a></li>
                                                <li><a href="email-template-confirm-3.html">Mail Confirmation 3</a></li>
                                                <li><a href="email-template-confirm-4.html">Mail Confirmation 4</a></li>
                                                <li><a href="email-template-confirm-5.html">Mail Confirmation 5</a></li>
                                            </ul>
                                        </li>
                                        <li><a >Mail Reset password</a>
                                            <ul className="sub-menu">
                                                <li><a href="email-template-forgot-password-1.html">Reset password 1</a></li>
                                                <li><a href="email-template-forgot-password-2.html">Reset password 2</a></li>
                                                <li><a href="email-template-forgot-password-3.html">Reset password 3</a></li>
                                                <li><a href="email-template-forgot-password-4.html">Reset password 4</a></li>
                                                <li><a href="email-template-forgot-password-5.html">Reset password 5</a></li>
                                            </ul>
                                        </li>
                                        <li><a >Mail Promotional</a>
                                            <ul className="sub-menu">
                                                <li><a href="email-template-offers-1.html">Offer Mail 1</a></li>
                                                <li><a href="email-template-offers-2.html">Offer Mail 2</a></li>
                                                <li><a href="email-template-offers-3.html">Offer Mail 3</a></li>
                                                <li><a href="email-template-offers-4.html">Offer Mail 4</a></li>
                                                <li><a href="email-template-offers-5.html">Offer Mail 5</a></li>
                                                <li><a href="email-template-offers-6.html">Offer Mail 6</a></li>
                                                <li><a href="email-template-offers-7.html">Offer Mail 7</a></li>
                                                <li><a href="email-template-offers-8.html">Offer Mail 8</a></li>
                                            </ul>
                                        </li>
                                        <li><a >Vendor Account Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                                <li><a href="vendor-profile.html">Vendor Profile</a></li>
                                                <li><a href="vendor-uploads.html">Vendor Uploads</a></li>
                                                <li><a href="vendor-settings.html">Vendor Settings</a></li>
                                            </ul>
                                        </li>
                                        <li><a >User Account Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="user-profile.html">User Profile</a></li>
                                                <li><a href="user-history.html">User History</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="track-order.html">Track Order</a></li>
                                                <li><a href="user-invoice.html">User Invoice</a></li>
                                            </ul>
                                        </li>
                                        <li><a >Construction Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="404-error-page.html">404 Error Page</a></li>
                                                <li><a href="under-maintenance.html">Maintenance Page</a></li>
                                                <li><a href="coming-soon.html">Comming Soon Page</a></li>
                                            </ul>
                                        </li>
                                        <li><a >Vendor Catalog Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="catalog-single-vendor.html">Catalog Single Vendor</a></li>
                                                <li><a href="catalog-multi-vendor.html">Catalog Multi Vendor</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a >Trang</a>
                                    <ul className="sub-menu">
                                        <li><a href="about-us.html">Thông tin</a></li>
                                        <li><a href="contact-us.html">Liên hệ</a></li>
                                        <li><a href="cart.html">Giỏ hàng</a></li>
                                        <li><a href="checkout.html">Thanh toán</a></li>
                                        <li><a href="compare.html">So sánh</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="login.html">Đăng nhập</a></li>
                                        <li><a href="register.html">Đăng ký</a></li>
                                        <li><a href="track-order.html">Theo dõi đơn hàng</a></li>
                                        <li><a href="terms-condition.html">Điều khoản & điều kiện</a></li>
                                        <li><a href="privacy-policy.html">Chính sách bảo mật</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a >Tin tức</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                                        <li><a href="blog-detail-left-sidebar.html">Blog detail left sidebar</a></li>
                                        <li><a href="blog-detail-right-sidebar.html">Blog detail right sidebar</a></li>
                                        <li><a href="blog-full-width.html">Blog full width</a></li>
                                        <li><a href="blog-detail-full-width.html">Blog detail full width</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a >Yếu tố</a>
                                    <ul className="sub-menu">
                                        <li><a href="elemets-products.html">Products</a></li>
                                        <li><a href="elemets-typography.html">Typography</a></li>
                                        <li><a href="elemets-title.html">Titles</a></li>
                                        <li><a href="elemets-categories.html">Categories</a></li>
                                        <li><a href="elemets-buttons.html">Buttons</a></li>
                                        <li><a href="elemets-tabs.html">Tabs</a></li>
                                        <li><a href="elemets-accordions.html">Accordions</a></li>
                                        <li><a href="elemets-blog.html">Blogs</a></li>
                                    </ul>
                                </li>
                                <li><a href="offer.html">Ưu đãi hấp dẫn</a></li>
                            </ul>
                        </div>
                        <div className="header-res-lan-curr">
                            <div className="header-top-lan-curr">
                                {/* <!-- Language Start --> */}
                                <div className="header-top-lan dropdown">
                                    <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">Ngôn ngữ <i
                                        className="ecicon eci-caret-down" aria-hidden="true"></i></button>
                                    <ul className="dropdown-menu">
                                        <li className="active"><a className="dropdown-item" href="#">English</a></li>
                                        <li><a className="dropdown-item" href="#">Italiano</a></li>
                                    </ul>
                                </div>
                                {/* <!-- Language End --> */}
                                {/* <!-- Currency Start --> */}
                                <div className="header-top-curr dropdown">
                                    <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">Currency <i
                                        className="ecicon eci-caret-down" aria-hidden="true"></i></button>
                                    <ul className="dropdown-menu">
                                        <li className="active"><a className="dropdown-item" href="#">USD $</a></li>
                                        <li><a className="dropdown-item" href="#">EUR €</a></li>
                                    </ul>
                                </div>
                                {/* <!-- Currency End --> */}
                            </div>
                            {/* <!-- Social Start --> */}
                            <div className="header-res-social">
                                <div className="header-top-social">
                                    <ul className="mb-0">
                                        <li className="list-inline-item"><a href="#"><i className="ecicon eci-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="ecicon eci-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="ecicon eci-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="ecicon eci-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Social End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- tco Menu End --> */}
            </header>

            <div className="ec-side-cart-overlay"></div>
            <div id="ec-side-cart" className="ec-side-cart ">
                <div className="ec-cart-inner">
                    <div className="ec-cart-top">
                        <div className="ec-cart-title">
                            <span className="cart_title">Giỏ hàng của tôi</span>
                            <button className="ec-close" onClick={closeMiniCart}>×</button>
                        </div>
                        <ul className="eccart-pro-items">
                            <li>
                                <a href="product-gallery-full-width.html" className="sidecart_pro_img"><img
                                    src="./src/assets/images/product-image/39_1.jpg" alt="product"/></a>
                                <div className="ec-pro-content">
                                    <a href="single-product-gallery-full-width.html" className="cart_pro_title">Máy ảnh tức thì với hai album</a>
                                    <span className="cart-price"><span>$450</span> x 1</span>
                                    <div className="qty-plus-minus">
                                        <input className="qty-input" type="text" name="ec_qtybtn" defaultValue={'1'}  />
                                    </div>
                                    <a href="#" className="remove">×</a>
                                </div>
                            </li>
                            <li>
                                <a href="product-gallery-full-width.html" className="sidecart_pro_img"><img
                                    src="./src/assets/images/product-image/40_1.jpg" alt="product"/></a>
                                <div className="ec-pro-content">
                                    <a href="product-gallery-full-width.html" className="cart_pro_title">Google nest không dây</a>
                                    <span className="cart-price"><span>$360</span> x 1</span>
                                    <div className="qty-plus-minus">
                                        <input className="qty-input" type="text" name="ec_qtybtn"  defaultValue={'1'}/>
                                    </div>
                                    <a href="#" className="remove">×</a>
                                </div>
                            </li>
                            <li>
                                <a href="product-gallery-full-width.html" className="sidecart_pro_img"><img
                                    src="./src/assets/images/product-image/41_1.jpg" alt="product"/></a>
                                <div className="ec-pro-content">
                                    <a href="product-gallery-full-width.html" className="cart_pro_title">Earbuds không dây thế hệ thứ 3</a>
                                    <span className="cart-price"><span>$30</span> x 1</span>
                                    <div className="qty-plus-minus">
                                        <input className="qty-input" type="text" name="ec_qtybtn"  defaultValue={'1'}/>
                                    </div>
                                    <a href="#" className="remove">×</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ec-cart-bottom">
                        <div className="cart-sub-total">
                            <table className="table cart-table">
                                <tbody>
                                    <tr>
                                        <td className="text-left">Tổng phụ :</td>
                                        <td className="text-right">$0.00</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">VAT (20%) :</td>
                                        <td className="text-right">$0.00</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">Tất cả:</td>
                                        <td className="text-right primary-color">$0.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cart_btn" style={{ height: "50px"}}>
                            <a  className="btn btn-primary">Xem giỏ hàng</a>
                            <a  className="btn btn-secondary">Thanh toán</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header