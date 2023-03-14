import React from 'react'

function MainHome() {

    const styleUuDai = {
        box: {
            width: "80%",
            padding: '15px 0',
            height: '350px',
            alignItem: 'center',
            marginLeft: '11%',
            marginTop: "10px"
        },
        img: {
            height: '300px', width: '400px'
        }
    }

    const styleBrand = {
        display: 'flex',
        justifyContent: 'space-around'
    }

    return (
        <>
            <section className="section ec-category-section section-space-mb">
                <div className="container">
                    <div className="row">
                        <div className="ec_cat_slider" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div className="ec_cat_content">
                                <div className="ec_cat_inner">
                                    <a href="#">
                                        <h2 className="d-none">Loại</h2>
                                        <div className="ec-cat-image">
                                            <img src="./src/assets/images/category-image/8.svg" className="svg_img cat_svg" alt="" />
                                        </div>
                                        <div className="ec-cat-desc">
                                            <span className="ec-section-title">Laptops & PC</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ec_cat_content">
                                <div className="ec_cat_inner">
                                    <a href="#">
                                        <div className="ec-cat-image">
                                            <img src="./src/assets/images/category-image/9.svg" className="svg_img cat_svg" alt="" />
                                        </div>
                                        <div className="ec-cat-desc">
                                            <span className="ec-section-title">Đồng hồ thông minh</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ec_cat_content">
                                <div className="ec_cat_inner">
                                    <a href="#">
                                        <div className="ec-cat-image">
                                            <img src="./src/assets/images/category-image/10.svg" className="svg_img cat_svg" alt="" />
                                        </div>
                                        <div className="ec-cat-desc">
                                            <span className="ec-section-title">Camera</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ec_cat_content">
                                <div className="ec_cat_inner">
                                    <a href="#">
                                        <div className="ec-cat-image">
                                            <img src="./src/assets/images/category-image/11.svg" className="svg_img cat_svg" alt="" />
                                        </div>
                                        <div className="ec-cat-desc">
                                            <span className="ec-section-title">Tai cầm</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ec_cat_content">
                                <div className="ec_cat_inner">
                                    <a href="#">
                                        <div className="ec-cat-image">
                                            <img src="./src/assets/images/category-image/12.svg" className="svg_img cat_svg" alt="" />
                                        </div>
                                        <div className="ec-cat-desc">
                                            <span className="ec-section-title">Tai nghe</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ec_cat_content">
                                <div className="ec_cat_inner">
                                    <a href="#">
                                        <div className="ec-cat-image">
                                            <img src="./src/assets/images/category-image/13.svg" className="svg_img cat_svg" alt="" />
                                        </div>
                                        <div className="ec-cat-desc">
                                            <span className="ec-section-title">Thực tế ảo</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ec_cat_content">
                                <div className="ec_cat_inner">
                                    <a href="#">
                                        <div className="ec-cat-image">
                                            <img src="./src/assets/images/category-image/14.svg" className="svg_img cat_svg" alt="" />
                                        </div>
                                        <div className="ec-cat-desc">
                                            <span className="ec-section-title">Camera</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section ec-product-tab section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 section-title-block">
                            <div className="section-title">
                                <h2 className="ec-title">Sản phẩm nổi bật</h2>
                                <h6 className="ec-sub-title">Lorem Ipsum is simply dummy text of the printing</h6>

                            </div>
                        </div>

                    </div>
                    <div className="row m-tb-minus-15">
                        <div className="col">
                            <div className="tab-content">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ec-product-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-product-hover"></div>
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-gallery-full-width.html" className="image">
                                                        <img className="main-image" src="./src/assets/images/product-image/39_1.jpg"
                                                            alt="Product" />
                                                        <img className="hover-image" src="./src/assets/images/product-image/39_2.jpg"
                                                            alt="Product" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-opt-inner">
                                                        <div className="ec-pro-color">
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active"><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/39_1.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/39_2.jpg"
                                                                    data-tooltip="Gray"><span
                                                                    ></span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="ec-pro-compare">
                                                            <a href="compare.html" className="ec-btn-group compare"
                                                                title="Compare"><img src="./src/assets/images/icons/compare_5.svg"
                                                                    className="svg_img pro_svg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Máy ảnh tức thì với hai album</a></h5>
                                                <h6 className="ec-pro-stitle"><a href="shop-left-sidebar-col-3.html">Camera</a></h6>
                                                <div className="ec-pro-rat-price">
                                                    <div className="ec-pro-rat-pri-inner">
                                                        <span className="ec-price">
                                                            <span className="new-price">$159.00</span>
                                                            <span className="old-price">$200.00</span>
                                                        </span>
                                                        <span className="ec-pro-rating">
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pro-hidden-block">

                                                    <div className="ec-pro-desc">Lorem Ipsum is simply dummy text of the printing.</div>
                                                    <div className="ec-pro-actions">
                                                        <a className="ec-btn-group wishlist" title="Wishlist"><img
                                                            src="./src/assets/images/icons/pro_wishlist.svg"
                                                            className="svg_img pro_svg" alt="" /></a>
                                                        <button title="Add To Cart" className="add-to-cart btn btn-primary">Thêm vào giỏ</button>
                                                        <a href="#" className="ec-btn-group quickview" data-link-action="quickview"
                                                            title="Quick view" data-bs-toggle="modal"
                                                            data-bs-target="#ec_quickview_modal"><img
                                                                src="./src/assets/images/icons/quickview.svg" className="svg_img pro_svg"
                                                                alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ec-product-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-product-hover"></div>
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-gallery-full-width.html" className="image">
                                                        <img className="main-image" src="./src/assets/images/product-image/40_1.jpg"
                                                            alt="Product" />
                                                        <img className="hover-image" src="./src/assets/images/product-image/40_2.jpg"
                                                            alt="Product" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-opt-inner">
                                                        <div className="ec-pro-color">
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active"><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/40_1.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/40_1.jpg"
                                                                    data-tooltip="Gray"><span
                                                                    ></span></a></li>
                                                                <li><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/40_2.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/40_2.jpg"
                                                                    data-tooltip="Orange"><span
                                                                    ></span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="ec-pro-compare">
                                                            <a href="compare.html" className="ec-btn-group compare"
                                                                title="Compare"><img src="./src/assets/images/icons/compare_5.svg"
                                                                    className="svg_img pro_svg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Google nest không dây</a></h5>
                                                <h6 className="ec-pro-stitle"><a href="shop-left-sidebar-col-3.html">Loa đa phương tiện</a></h6>
                                                <div className="ec-pro-rat-price">
                                                    <div className="ec-pro-rat-pri-inner">
                                                        <span className="ec-price">
                                                            <span className="new-price">$180.00</span>
                                                            <span className="old-price">$199.00</span>
                                                        </span>
                                                        <span className="ec-pro-rating">
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pro-hidden-block">

                                                    <div className="ec-pro-desc">Lorem Ipsum is simply dummy text of the printing.</div>
                                                    <div className="ec-pro-actions">
                                                        <a className="ec-btn-group wishlist" title="Wishlist"><img
                                                            src="./src/assets/images/icons/pro_wishlist.svg"
                                                            className="svg_img pro_svg" alt="" /></a>
                                                        <button title="Add To Cart" className="add-to-cart btn btn-primary">Thêm vào giỏ
                                                        </button>
                                                        <a href="#" className="ec-btn-group quickview" data-link-action="quickview"
                                                            title="Quick view" data-bs-toggle="modal"
                                                            data-bs-target="#ec_quickview_modal"><img
                                                                src="./src/assets/images/icons/quickview.svg" className="svg_img pro_svg"
                                                                alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ec-product-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-product-hover"></div>
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-gallery-full-width.html" className="image">
                                                        <img className="main-image" src="./src/assets/images/product-image/41_1.jpg"
                                                            alt="Product" />
                                                        <img className="hover-image" src="./src/assets/images/product-image/41_2.jpg"
                                                            alt="Product" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-opt-inner">
                                                        <div className="ec-pro-color">
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active"><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/41_1.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/41_1.jpg"
                                                                    data-tooltip="Gray"><span
                                                                    ></span></a></li>
                                                                <li><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/41_2.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/41_2.jpg"
                                                                    data-tooltip="Orange"><span
                                                                    ></span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="ec-pro-compare">
                                                            <a href="compare.html" className="ec-btn-group compare"
                                                                title="Compare"><img src="./src/assets/images/icons/compare_5.svg"
                                                                    className="svg_img pro_svg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Earbuds không dây thế hệ thứ 3
                                                </a></h5>
                                                <h6 className="ec-pro-stitle"><a href="shop-left-sidebar-col-3.html">Phụ kiện</a></h6>
                                                <div className="ec-pro-rat-price">
                                                    <div className="ec-pro-rat-pri-inner">
                                                        <span className="ec-price">
                                                            <span className="new-price">$159.00</span>
                                                            <span className="old-price">$200.00</span>
                                                        </span>
                                                        <span className="ec-pro-rating">
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pro-hidden-block">

                                                    <div className="ec-pro-desc">Lorem Ipsum is simply dummy text of the printing.</div>
                                                    <div className="ec-pro-actions">
                                                        <a className="ec-btn-group wishlist" title="Wishlist"><img
                                                            src="./src/assets/images/icons/pro_wishlist.svg"
                                                            className="svg_img pro_svg" alt="" /></a>
                                                        <button title="Add To Cart" className="add-to-cart btn btn-primary">Thêm vào giỏ</button>
                                                        <a href="#" className="ec-btn-group quickview" data-link-action="quickview"
                                                            title="Quick view" data-bs-toggle="modal"
                                                            data-bs-target="#ec_quickview_modal"><img
                                                                src="./src/assets/images/icons/quickview.svg" className="svg_img pro_svg"
                                                                alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ec-product-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-product-hover"></div>
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-gallery-full-width.html" className="image">
                                                        <img className="main-image" src="./src/assets/images/product-image/42_1.jpg"
                                                            alt="Product" />
                                                        <img className="hover-image" src="./src/assets/images/product-image/42_2.jpg"
                                                            alt="Product" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-opt-inner">
                                                        <div className="ec-pro-color">
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active"><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/42_1.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/42_2.jpg"
                                                                    data-tooltip="Gray"><span
                                                                    ></span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="ec-pro-compare">
                                                            <a href="compare.html" className="ec-btn-group compare"
                                                                title="Compare"><img src="./src/assets/images/icons/compare_5.svg"
                                                                    className="svg_img pro_svg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Apple iPhone 13 128 GB, Starlight</a></h5>
                                                <h6 className="ec-pro-stitle"><a href="shop-left-sidebar-col-3.html">Điện thoại</a></h6>
                                                <div className="ec-pro-rat-price">
                                                    <div className="ec-pro-rat-pri-inner">
                                                        <span className="ec-price">
                                                            <span className="new-price">$1590.00</span>
                                                            <span className="old-price">$2000.00</span>
                                                        </span>
                                                        <span className="ec-pro-rating">
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pro-hidden-block">

                                                    <div className="ec-pro-desc">Lorem Ipsum is simply dummy text of the printing.</div>
                                                    <div className="ec-pro-actions">
                                                        <a className="ec-btn-group wishlist" title="Wishlist"><img
                                                            src="./src/assets/images/icons/pro_wishlist.svg"
                                                            className="svg_img pro_svg" alt="" /></a>
                                                        <button title="Add To Cart" className="add-to-cart btn btn-primary">Thêm vào giỏ</button>
                                                        <a href="#" className="ec-btn-group quickview" data-link-action="quickview"
                                                            title="Quick view" data-bs-toggle="modal"
                                                            data-bs-target="#ec_quickview_modal"><img
                                                                src="./src/assets/images/icons/quickview.svg" className="svg_img pro_svg"
                                                                alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ec-product-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-product-hover"></div>
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-gallery-full-width.html" className="image">
                                                        <img className="main-image" src="./src/assets/images/product-image/43_1.jpg"
                                                            alt="Product" />
                                                        <img className="hover-image" src="./src/assets/images/product-image/43_2.jpg"
                                                            alt="Product" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-opt-inner">
                                                        <div className="ec-pro-color">
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active"><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/43_1.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/43_1.jpg"
                                                                    data-tooltip="Gray"><span
                                                                    ></span></a></li>
                                                                <li><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/43_2.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/43_2.jpg"
                                                                    data-tooltip="Orange"><span
                                                                    ></span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="ec-pro-compare">
                                                            <a href="compare.html" className="ec-btn-group compare"
                                                                title="Compare"><img src="./src/assets/images/icons/compare_5.svg"
                                                                    className="svg_img pro_svg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Máy lọc không khí sắc nét cho ngôi nhà</a></h5>
                                                <h6 className="ec-pro-stitle"><a href="shop-left-sidebar-col-3.html">Phụ kiện</a></h6>
                                                <div className="ec-pro-rat-price">
                                                    <div className="ec-pro-rat-pri-inner">
                                                        <span className="ec-price">
                                                            <span className="new-price">$599.00</span>
                                                            <span className="old-price">$650.00</span>
                                                        </span>
                                                        <span className="ec-pro-rating">
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pro-hidden-block">

                                                    <div className="ec-pro-desc">Lorem Ipsum is simply dummy text of the printing.</div>
                                                    <div className="ec-pro-actions">
                                                        <a className="ec-btn-group wishlist" title="Wishlist"><img
                                                            src="./src/assets/images/icons/pro_wishlist.svg"
                                                            className="svg_img pro_svg" alt="" /></a>
                                                        <button title="Add To Cart" className="add-to-cart btn btn-primary">Thêm vào giỏ</button>
                                                        <a href="#" className="ec-btn-group quickview" data-link-action="quickview"
                                                            title="Quick view" data-bs-toggle="modal"
                                                            data-bs-target="#ec_quickview_modal"><img
                                                                src="./src/assets/images/icons/quickview.svg" className="svg_img pro_svg"
                                                                alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ec-product-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-product-hover"></div>
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-gallery-full-width.html" className="image">
                                                        <img className="main-image" src="./src/assets/images/product-image/44_1.jpg"
                                                            alt="Product" />
                                                        <img className="hover-image" src="./src/assets/images/product-image/44_2.jpg"
                                                            alt="Product" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-opt-inner">
                                                        <div className="ec-pro-color">
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active"><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/44_1.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/44_1.jpg"
                                                                    data-tooltip="Gray"><span
                                                                    ></span></a></li>
                                                                <li><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/44_2.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/44_2.jpg"
                                                                    data-tooltip="Orange"><span
                                                                    ></span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="ec-pro-compare">
                                                            <a href="compare.html" className="ec-btn-group compare"
                                                                title="Compare"><img src="./src/assets/images/icons/compare_5.svg"
                                                                    className="svg_img pro_svg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Tai nghe blutooth không dây</a></h5>
                                                <h6 className="ec-pro-stitle"><a href="shop-left-sidebar-col-3.html">Tai nghe</a></h6>
                                                <div className="ec-pro-rat-price">
                                                    <div className="ec-pro-rat-pri-inner">
                                                        <span className="ec-price">
                                                            <span className="new-price">$65.00</span>
                                                        </span>
                                                        <span className="ec-pro-rating">
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pro-hidden-block">

                                                    <div className="ec-pro-desc">Lorem Ipsum is simply dummy text of the printing.</div>
                                                    <div className="ec-pro-actions">
                                                        <a className="ec-btn-group wishlist" title="Wishlist"><img
                                                            src="./src/assets/images/icons/pro_wishlist.svg"
                                                            className="svg_img pro_svg" alt="" /></a>
                                                        <button title="Add To Cart" className="add-to-cart btn btn-primary">Thêm vào giỏ</button>
                                                        <a href="#" className="ec-btn-group quickview" data-link-action="quickview"
                                                            title="Quick view" data-bs-toggle="modal"
                                                            data-bs-target="#ec_quickview_modal"><img
                                                                src="./src/assets/images/icons/quickview.svg" className="svg_img pro_svg"
                                                                alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ec-product-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-product-hover"></div>
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-gallery-full-width.html" className="image">
                                                        <img className="main-image" src="./src/assets/images/product-image/45_1.jpg"
                                                            alt="Product" />
                                                        <img className="hover-image" src="./src/assets/images/product-image/45_2.jpg"
                                                            alt="Product" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-opt-inner">
                                                        <div className="ec-pro-color">
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active"><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/45_1.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/45_2.jpg"
                                                                    data-tooltip="Gray"><span
                                                                    ></span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="ec-pro-compare">
                                                            <a href="compare.html" className="ec-btn-group compare"
                                                                title="Compare"><img src="./src/assets/images/icons/compare_5.svg"
                                                                    className="svg_img pro_svg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Bộ xử lý máy tính xách tay i7 1TB, 6GB</a></h5>
                                                <h6 className="ec-pro-stitle"><a href="shop-left-sidebar-col-3.html">Laptop</a></h6>
                                                <div className="ec-pro-rat-price">
                                                    <div className="ec-pro-rat-pri-inner">
                                                        <span className="ec-price">
                                                            <span className="new-price">$1900.00</span>
                                                            <span className="old-price">$2100.00</span>
                                                        </span>
                                                        <span className="ec-pro-rating">
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pro-hidden-block">

                                                    <div className="ec-pro-desc">Lorem Ipsum is simply dummy text of the printing.</div>
                                                    <div className="ec-pro-actions">
                                                        <a className="ec-btn-group wishlist" title="Wishlist"><img
                                                            src="./src/assets/images/icons/pro_wishlist.svg"
                                                            className="svg_img pro_svg" alt="" /></a>
                                                        <button title="Add To Cart" className="add-to-cart btn btn-primary">Thêm vào giỏ</button>
                                                        <a href="#" className="ec-btn-group quickview" data-link-action="quickview"
                                                            title="Quick view" data-bs-toggle="modal"
                                                            data-bs-target="#ec_quickview_modal"><img
                                                                src="./src/assets/images/icons/quickview.svg" className="svg_img pro_svg"
                                                                alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ec-product-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-product-hover"></div>
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-gallery-full-width.html" className="image">
                                                        <img className="main-image" src="./src/assets/images/product-image/46_1.jpg"
                                                            alt="Product" />
                                                        <img className="hover-image" src="./src/assets/images/product-image/46_2.jpg"
                                                            alt="Product" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-opt-inner">
                                                        <div className="ec-pro-color">
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active"><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/46_1.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/46_1.jpg"
                                                                    data-tooltip="Gray"><span
                                                                    ></span></a></li>
                                                                <li><a href="#" className="ec-opt-clr-img"
                                                                    data-src="./src/assets/images/product-image/46_2.jpg"
                                                                    data-src-hover="./src/assets/images/product-image/46_2.jpg"
                                                                    data-tooltip="Orange"><span
                                                                    ></span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="ec-pro-compare">
                                                            <a href="compare.html" className="ec-btn-group compare"
                                                                title="Compare"><img src="./src/assets/images/icons/compare_5.svg"
                                                                    className="svg_img pro_svg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Đèn LED ngọn đuốc</a></h5>
                                                <h6 className="ec-pro-stitle"><a href="shop-left-sidebar-col-3.html">Đèn LED</a></h6>
                                                <div className="ec-pro-rat-price">
                                                    <div className="ec-pro-rat-pri-inner">
                                                        <span className="ec-price">
                                                            <span className="new-price">$45.00</span>
                                                            <span className="old-price">$60.00</span>
                                                        </span>
                                                        <span className="ec-pro-rating">
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                            <i className="ecicon eci-star-o"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pro-hidden-block">

                                                    <div className="ec-pro-desc">Lorem Ipsum is simply dummy text of the printing.</div>
                                                    <div className="ec-pro-actions">
                                                        <a className="ec-btn-group wishlist" title="Wishlist"><img
                                                            src="./src/assets/images/icons/pro_wishlist.svg"
                                                            className="svg_img pro_svg" alt="" /></a>
                                                        <button title="Add To Cart" className="add-to-cart btn btn-primary">Add To
                                                            Cart</button>
                                                        <a href="#" className="ec-btn-group quickview" data-link-action="quickview"
                                                            title="Quick view" data-bs-toggle="modal"
                                                            data-bs-target="#ec_quickview_modal"><img
                                                                src="./src/assets/images/icons/quickview.svg" className="svg_img pro_svg"
                                                                alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ec-banner section section-space-p">
                <h2 className="d-none">Banner</h2>
                <div className="container">
                    <div className="row m-tb-minus-15">
                        <div className="ec-banners">
                            <div className="ec-banner-left col-sm-6">
                                <div className="ec-banner-block ec-banner-block-1 col-sm-12">
                                    <div className="banner-block">
                                        <img src="./src/assets/images/banner/23.png" alt="" />
                                        <div className="banner-content">
                                            <span className="ec-banner-stitle">Máy tính bảng lenovo</span>
                                            <span className="ec-banner-title">GIẢM GIÁ tới 70%</span>
                                            <span className="ec-banner-btn"><a href="#" className="btn-primary">Mua sắm ngay</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ec-banner-right col-sm-6">
                                <div className="ec-banner-block ec-banner-block-2 col-sm-12">
                                    <div className="banner-block">
                                        <img src="./src/assets/images/banner/24.png" alt="" />
                                        <div className="banner-content">
                                            <span className="ec-banner-stitle">Xiaoyi YI 1080p</span>
                                            <span className="ec-banner-title">Camera IP WiFi 36</span>
                                            <span className="ec-banner-btn"><a href="#" className="btn-primary">Mua sắm ngay</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section ec-exe-spe-section section-space-ptb-100 section-space-mt section-space-mb-100"
            >
                <div className="container">
                    <div className="row">
                        <div className="ec-spe-section col-lg-12 col-md-12 col-sm-12 margin-b-30">
                            <div className="col-md-12 text-left">
                                <div className="section-title mb-6">
                                    <h2 className="ec-title">Ưu đãi trong ngày</h2>
                                </div>
                            </div>

                            <div className="ec-spe-products">
                                <div className="ec-fs-product">
                                    <div className="ec-fs-pro-inner ec-product-inner" style={styleUuDai.box}>
                                        <div className="ec-fs-pro-image-outer col-lg-6 col-md-6 col-sm-6">
                                            <div className="ec-fs-pro-image">
                                                <a href="product-gallery-full-width.html" className="image"><img className="main-image"
                                                    src="./src/assets/images/special-product/1_1.jpg" alt="Product" style={styleUuDai.img} /></a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content col-lg-6 col-md-6 col-sm-6">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Samsung gaming console s8</a></h5>
                                            <h6 className="ec-pro-stitle"><a href="shop-left-sidebar-col-3.html">Gaming</a></h6>
                                            <div className="ec-pro-rat-price">
                                                <span className="ec-price">
                                                    <span className="new-price">$159.00</span>
                                                    <span className="old-price">$200.00</span>
                                                </span>
                                            </div>
                                            <div className="ec-fs-pro-progress">
                                                <span className="ec-fs-pro-progress-desc"><span>Đã mua:
                                                    <b>0</b></span><span>Có sẵn: <b>350</b></span></span>
                                                <span className="ec-fs-pro-progressbar"></span>
                                            </div>
                                            <div className="countdowntimer">
                                                <span className="ec-fs-count-desc"> Khẩn trương lên! ưu đãi kết thúc sau:</span>
                                                <span id="ec-fs-count-1"></span>
                                            </div>
                                            <div className="ec-pro-actions">
                                                <button title="Add To Cart" className="add-to-cart btn btn-primary">Thêm vào giỏ</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ec-fs-product">
                                    <div className="ec-fs-pro-inner ec-product-inner" style={styleUuDai.box}>
                                        <div className="ec-fs-pro-image-outer col-lg-6 col-md-6 col-sm-6">
                                            <div className="ec-fs-pro-image">
                                                <a href="product-gallery-full-width.html" className="image"><img className="main-image"
                                                    src="./src/assets/images/special-product/2_1.jpg" alt="Product" style={styleUuDai.img} /></a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content col-lg-6 col-md-6 col-sm-6">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Tai nghe không dây với mic neckband </a></h5>
                                            <h6 className="ec-pro-stitle"><a href="shop-left-sidebar-col-3.html">Đa phương tiện</a></h6>
                                            <div className="ec-pro-rat-price">
                                                <span className="ec-price">
                                                    <span className="new-price">$480.00</span>
                                                    <span className="old-price">$700.00</span>
                                                </span>
                                            </div>
                                            <div className="ec-fs-pro-progress">
                                                <span className="ec-fs-pro-progress-desc"><span>Đã mua:
                                                    <b>0</b></span><span>Có sẵn: <b>200</b></span></span>
                                                <span className="ec-fs-pro-progressbar"></span>
                                            </div>
                                            <div className="countdowntimer">
                                                <span className="ec-fs-count-desc"> Khẩn trương lên! ưu đãi kết thúc sau:</span>
                                                <span id="ec-fs-count-2"></span>
                                            </div>
                                            <div className="ec-pro-actions">
                                                <button title="Add To Cart" className="add-to-cart btn btn-primary">Thêm vào giỏ</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section ec-offer-section section-space-mt section-space-mb">
                <h2 className="d-none">Offer</h2>
                <div className="container">
                    <div className="ec-offer-inner ofr-img">
                        <div className="col-sm-6 ec-offer-content">
                            <div className="ec-offer-content-inner">
                                <h2 className="ec-offer-stitle">black friday</h2>
                                <h2 className="ec-offer-title">giảm giá tới 60%</h2>
                                <span className="ec-offer-desc">Chọn phụ kiện cho các tiện ích yêu thích của bạn</span>
                                <span className="ec-offer-btn"><a href="#" className="btn btn-primary">Mua sắm ngay</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section ec-all-products section-space-p">
                <h2 className="d-none">tất cả sản phẩm</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6 ec-all-product-content ec-new-product-content margin-b-30">
                            <div className="col-md-12 text-left">
                                <div className="section-title">
                                    <h2 className="ec-title">Hàng mới về</h2>
                                </div>
                            </div>
                            <div className="ec-new-slider">
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/39_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Camera instant image</a></h5>
                                            <h6 className="ec-pro-stitle">Camera</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$589.00</span>
                                                        <span className="old-price">$658.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/40_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Google nest speaker</a></h5>
                                            <h6 className="ec-pro-stitle">Multimedia</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$256.00</span>
                                                        <span className="old-price">$298.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/41_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Wireless airpods</a></h5>
                                            <h6 className="ec-pro-stitle">accessories</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$56.00</span>
                                                        <span className="old-price">$78.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/42_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">iPhone 13 max</a></h5>
                                            <h6 className="ec-pro-stitle">Phone</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$2580.00</span>
                                                        <span className="old-price">$3650.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/43_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Room Purifier</a></h5>
                                            <h6 className="ec-pro-stitle">Electronics</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$385.00</span>
                                                        <span className="old-price">$456.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/44_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Wireless headphone</a></h5>
                                            <h6 className="ec-pro-stitle">Music</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$159.00</span>
                                                        <span className="old-price">$200.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/45_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Samsung laptop</a></h5>
                                            <h6 className="ec-pro-stitle">Laptop</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$1520.00</span>
                                                        <span className="old-price">$1752.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/46_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">LED torch</a></h5>
                                            <h6 className="ec-pro-stitle">Electronics</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$20.00</span>
                                                        <span className="old-price">$30.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6 ec-all-product-content ec-special-product-content margin-b-30">
                            <div className="col-md-12 text-left">
                                <div className="section-title">
                                    <h2 className="ec-title">Ưu đãi đặc biệt</h2>
                                </div>
                            </div>
                            <div className="ec-special-slider">
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/42_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">iPhone 13 max</a></h5>
                                            <h6 className="ec-pro-stitle">Phone</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$2580.00</span>
                                                        <span className="old-price">$3650.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/43_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Room Purifier</a></h5>
                                            <h6 className="ec-pro-stitle">Electronics</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$385.00</span>
                                                        <span className="old-price">$456.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/44_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Wireless headphone</a></h5>
                                            <h6 className="ec-pro-stitle">Music</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$159.00</span>
                                                        <span className="old-price">$200.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/45_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Samsung laptop</a></h5>
                                            <h6 className="ec-pro-stitle">Laptop</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$1520.00</span>
                                                        <span className="old-price">$1752.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/41_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Wireless airpods</a></h5>
                                            <h6 className="ec-pro-stitle">accessories</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$56.00</span>
                                                        <span className="old-price">$78.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/39_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Camera instant image</a></h5>
                                            <h6 className="ec-pro-stitle">Camera</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$589.00</span>
                                                        <span className="old-price">$658.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/40_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Google nest speaker</a></h5>
                                            <h6 className="ec-pro-stitle">Multimedia</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$256.00</span>
                                                        <span className="old-price">$298.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/46_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">LED torch</a></h5>
                                            <h6 className="ec-pro-stitle">Electronics</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$20.00</span>
                                                        <span className="old-price">$30.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6 ec-all-product-content ec-best-product-content">
                            <div className="col-md-12 text-left">
                                <div className="section-title">
                                    <h2 className="ec-title">Bán chạy nhất</h2>
                                </div>
                            </div>
                            <div className="ec-best-slider">
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/44_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Wireless headphone</a></h5>
                                            <h6 className="ec-pro-stitle">Music</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$159.00</span>
                                                        <span className="old-price">$200.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/45_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Samsung laptop</a></h5>
                                            <h6 className="ec-pro-stitle">Laptop</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$1520.00</span>
                                                        <span className="old-price">$1752.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/42_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">iPhone 13 max</a></h5>
                                            <h6 className="ec-pro-stitle">Phone</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$2580.00</span>
                                                        <span className="old-price">$3650.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/43_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Room Purifier</a></h5>
                                            <h6 className="ec-pro-stitle">Electronics</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$385.00</span>
                                                        <span className="old-price">$456.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/40_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Google nest speaker</a></h5>
                                            <h6 className="ec-pro-stitle">Multimedia</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$256.00</span>
                                                        <span className="old-price">$298.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/41_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Wireless airpods</a></h5>
                                            <h6 className="ec-pro-stitle">accessories</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$56.00</span>
                                                        <span className="old-price">$78.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/46_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">LED torch</a></h5>
                                            <h6 className="ec-pro-stitle">Electronics</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$20.00</span>
                                                        <span className="old-price">$30.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 ec-all-product-block">
                                    <div className="ec-all-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-gallery-full-width.html" className="image">
                                                    <img className="main-image" src="./src/assets/images/product-image/39_1.jpg"
                                                        alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-gallery-full-width.html">Camera instant image</a></h5>
                                            <h6 className="ec-pro-stitle">Camera</h6>
                                            <div className="ec-pro-rat-price">
                                                <div className="ec-pro-rat-pri-inner">
                                                    <span className="ec-price">
                                                        <span className="new-price">$589.00</span>
                                                        <span className="old-price">$658.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6 ec-right-banner-content dis-n-767">
                            <div className="ec-right-banner-inner">
                                <div className="right-banner-block">
                                    <img className="right-banner-img" src="./src/assets/images/banner/22.png" alt="Banner" />
                                    <div className="right-banner-content">
                                        <span className="ec-right-banner-title">mi 8 lite</span>
                                        <span className="ec-right-banner-stitle">selfies and style</span>
                                        <span className="ec-right-banner-btn"><a href="#" className="btn-primary">Thêm vào giỏ</a></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section ec-test-section section-space-ptb-100 section-space-mt section-space-mb">
                {/* style={{backgroundImage: URL('./src/assets/images/testimonial/testimonial_bg.jpg')}} */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 section-title-block">
                            <div className="section-title">
                                <h2 className="ec-title">Đánh giá của khách hàng</h2>
                                <h6 className="ec-sub-title">Lorem Ipsum is simply dummy text of the printing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="ec-test-outer">
                            <ul id="ec-testimonial-slider">
                                <li className="ec-test-item">
                                    <div className="ec-test-inner">
                                        <div className="ec-test-img"><img alt="testimonial" title="testimonial"
                                            src="./src/assets/images/testimonial/1.jpg" /></div>
                                        <div className="ec-test-content">
                                            <div className="ec-test-name">Nano</div>
                                            <div className="ec-test-designation">Việt Nam</div>
                                            <div className="ec-test-rating">
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                            </div>
                                            <div className="ec-test-desc">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry</div>

                                        </div>
                                    </div>
                                </li>
                                <li className="ec-test-item">
                                    <div className="ec-test-inner">
                                        <div className="ec-test-img"><img alt="testimonial" title="testimonial"
                                            src="./src/assets/images/testimonial/2.jpg" /></div>
                                        <div className="ec-test-content">
                                            <div className="ec-test-name">Lương Văn Bịp</div>
                                            <div className="ec-test-designation">Việt Nam</div>
                                            <div className="ec-test-rating">
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                            </div>
                                            <div className="ec-test-desc">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry</div>

                                        </div>
                                    </div>
                                </li>
                                <li className="ec-test-item">
                                    <div className="ec-test-inner">
                                        <div className="ec-test-img"><img alt="testimonial" title="testimonial"
                                            src="./src/assets/images/testimonial/3.jpg" /></div>
                                        <div className="ec-test-content">
                                            <div className="ec-test-name">Zũn Đé</div>
                                            <div className="ec-test-designation">Việt Nam</div>
                                            <div className="ec-test-rating">
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                            </div>
                                            <div className="ec-test-desc">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry</div>

                                        </div>
                                    </div>
                                </li>
                                <li className="ec-test-item">
                                    <div className="ec-test-inner">
                                        <div className="ec-test-img"><img alt="testimonial" title="testimonial"
                                            src="./src/assets/images/testimonial/1.jpg" /></div>
                                        <div className="ec-test-content">
                                            <div className="ec-test-name">Thuận Nè</div>
                                            <div className="ec-test-designation">Việt Nam</div>
                                            <div className="ec-test-rating">
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                            </div>
                                            <div className="ec-test-desc">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry</div>

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section ec-brand-area section-space-p">
                <h2 className="d-none">Thương hiệu</h2>
                <div className="container">
                    <div className="row">
                        <div className="ec-brand-outer">
                            <ul id="ec-brand-slider" style={styleBrand}>
                                <li className="ec-brand-item">
                                    <div className="ec-brand-img"><a href="#"><img alt="brand" title="brand"
                                        src="./src/assets/images/brand-image/1.png" /></a></div>
                                </li>
                                <li className="ec-brand-item">
                                    <div className="ec-brand-img"><a href="#"><img alt="brand" title="brand"
                                        src="./src/assets/images/brand-image/2.png" /></a></div>
                                </li>
                                <li className="ec-brand-item">
                                    <div className="ec-brand-img"><a href="#"><img alt="brand" title="brand"
                                        src="./src/assets/images/brand-image/3.png" /></a></div>
                                </li>
                                <li className="ec-brand-item">
                                    <div className="ec-brand-img"><a href="#"><img alt="brand" title="brand"
                                        src="./src/assets/images/brand-image/4.png" /></a></div>
                                </li>
                                <li className="ec-brand-item">
                                    <div className="ec-brand-img"><a href="#"><img alt="brand" title="brand"
                                        src="./src/assets/images/brand-image/5.png" /></a></div>
                                </li>
                                <li className="ec-brand-item">
                                    <div className="ec-brand-img"><a href="#"><img alt="brand" title="brand"
                                        src="./src/assets/images/brand-image/6.png" /></a></div>
                                </li>
                                <li className="ec-brand-item">
                                    <div className="ec-brand-img"><a href="#"><img alt="brand" title="brand"
                                        src="./src/assets/images/brand-image/7.png" /></a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section ec-instagram-section section-space-pt">
                <div className="ec-insta-wrapper">
                    <div className="ec-insta-outer">
                        <div className="insta-auto">
                            <h2 className="d-none">Instagram</h2>
                            <div className="ec-insta-item">
                                <div className="ec-insta-inner">
                                    <a href="#" target="_blank"><img src="./src/assets/images/instragram-image/1.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="ec-insta-item">
                                <div className="ec-insta-inner">
                                    <a href="#" target="_blank"><img src="./src/assets/images/instragram-image/2.jpg" alt="" />

                                    </a>
                                </div>
                            </div>
                            <div className="ec-insta-item">
                                <div className="ec-insta-inner">
                                    <a href="#" target="_blank"><img src="./src/assets/images/instragram-image/3.jpg" alt="" />

                                    </a>
                                </div>
                            </div>
                            <div className="ec-insta-item">
                                <div className="ec-insta-inner">
                                    <a href="#" target="_blank"><img src="./src/assets/images/instragram-image/4.jpg" alt="" />

                                    </a>
                                </div>
                            </div>
                            <div className="ec-insta-item">
                                <div className="ec-insta-inner">
                                    <a href="#" target="_blank"><img src="./src/assets/images/instragram-image/5.jpg" alt="" />

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section ec-services-section">
                <h2 className="d-none">Dịch vụ</h2>
                <div className="container">
                    <div className="row">
                        <div className="ec_ser_content ec_ser_content_1 col-sm-12 col-md-3">
                            <div className="ec_ser_inner">
                                <div className="ec-service-image">
                                    <img src="./src/assets/images/icons/service_5_1.svg" className="svg_img" alt="" />
                                </div>
                                <div className="ec-service-desc">
                                    <h2>Miễn phí vận chuyển</h2>
                                    <p>Miễn phí vận chuyển cho tất cả các đơn hàng tại Việt Nam</p>
                                </div>
                            </div>
                        </div>
                        <div className="ec_ser_content ec_ser_content_2 col-sm-12 col-md-3">
                            <div className="ec_ser_inner">
                                <div className="ec-service-image">
                                    <img src="./src/assets/images/icons/service_2.svg" className="svg_img" alt="" />
                                </div>
                                <div className="ec-service-desc">
                                    <h2>đảm bảo tiền</h2>
                                    <p>Đảm bảo hoàn tiền trong 30 ngày</p>
                                </div>
                            </div>
                        </div>
                        <div className="ec_ser_content ec_ser_content_3 col-sm-12 col-md-3">
                            <div className="ec_ser_inner">
                                <div className="ec-service-image">
                                    <img src="./src/assets/images/icons/service_3.svg" className="svg_img" alt="" />
                                </div>
                                <div className="ec-service-desc">
                                    <h2>hỗ trợ trực tuyến</h2>
                                    <p>Chúng tôi hỗ trợ trực tuyến 24/7 trong ngày</p>
                                </div>
                            </div>
                        </div>
                        <div className="ec_ser_content ec_ser_content_4 col-sm-12 col-md-3">
                            <div className="ec_ser_inner">
                                <div className="ec-service-image">
                                    <img src="./src/assets/images/icons/service_5_4.svg" className="svg_img" alt="" />
                                </div>
                                <div className="ec-service-desc">
                                    <h2>Giảm giá thành viên</h2>
                                    <p>Đơn đặt hàng bất cứ khi nào trên $ 120,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainHome