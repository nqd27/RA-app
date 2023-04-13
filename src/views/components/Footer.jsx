import React from 'react'

function Footer() {
    return (
        <footer className="ec-footer">
            <div className="footer-container">
                <div className="footer-top section-space-footer-p">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4 ec-footer-contact">
                                <div className="ec-footer-widget">
                                    <div className="ec-footer-logo"><a href="#"><img src="/assets/images/logo/footer-logo-5.png"
                                        alt=""/><img className="dark-footer-logo" src="/assets/images/logo/dark-logo-5.png"
                                            alt="Site Logo" style={{display: 'none'}} /></a></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <h4 className="ec-footer-heading">Đặt câu hỏi cho Tôi</h4>
                                    <div className="ec-footer-links">
                                        <ul className="align-items-center">
                                            <li className="ec-footer-link">
                                                <span className="call-img"><img src="/assets/images/icons/call_5.svg"
                                                    className="svg_img foo_img" alt="" /></span>
                                                <span className="call-desc">
                                                    <span>Bạn có thắc mắc? Gọi cho chúng tôi 24/7!</span>
                                                    <span><a href="tel:+80080018588">(800) 8001-8588</a>, <a href="tel:+0600874548">(0600) 874 548</a></span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ec-footer-widget ec-footer-social">
                                    <h4 className="ec-footer-heading">Theo dõi chúng tôi</h4>
                                    <div className="ec-footer-links">
                                        <ul className="align-items-center">
                                            <li className="list-inline-item"><a href="#"><i className="ecicon eci-facebook"></i></a>
                                            </li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="ecicon eci-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="ecicon eci-linkedin"></i></a>
                                            </li>
                                            <li className="list-inline-item"><a href="#"><i className="ecicon eci-twitter"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-2 ec-footer-info">
                                <div className="ec-footer-widget">
                                    <h4 className="ec-footer-heading">Thông tin</h4>
                                    <div className="ec-footer-links">
                                        <ul className="align-items-center">
                                            <li className="ec-footer-link"><a href="about-us.html">Về chúng tôi</a></li>
                                            <li className="ec-footer-link"><a href="track-order.html">Thông tin giao hàng</a></li>
                                            <li className="ec-footer-link"><a href="privacy-policy.html">Chính sách & chính sách</a></li>
                                            <li className="ec-footer-link"><a href="terms-condition.html">Điều khoản &điều kiện</a></li>
                                            <li className="ec-footer-link"><a href="contact-us.html">Liên hệ với chúng tôi</a></li>
                                            <li className="ec-footer-link"><a href="#">Trở lại</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-2 ec-footer-account">
                                <div className="ec-footer-widget">
                                    <h4 className="ec-footer-heading">Dịch vụ chăm sóc khách hàng</h4>
                                    <div className="ec-footer-links">
                                        <ul className="align-items-center">
                                            <li className="ec-footer-link"><a href="#">Sơ đồ trang web</a></li>
                                            <li className="ec-footer-link"><a href="wishlist.html">Danh sách yêu thích</a></li>
                                            <li className="ec-footer-link"><a href="#">Thương hiệu</a></li>
                                            <li className="ec-footer-link"><a href="offer.html">Phiếu quà tặng</a></li>
                                            <li className="ec-footer-link"><a href="#">Liên kết</a></li>
                                            <li className="ec-footer-link"><a href="offer.html">Đặc biệt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4 ec-footer-news">
                                <div className="ec-footer-widget">
                                    <h4 className="ec-footer-heading">Tin tức</h4>
                                    <div className="ec-footer-links">
                                        <ul className="align-items-center">
                                            <li className="ec-footer-link">Đăng ký e-mail của chúng tôi để nhận tin tức mới nhất.</li>
                                        </ul>
                                        <div className="ec-subscribe-form">
                                            <form id="ec-newsletter-form" name="ec-newsletter-form" method="post"
                                                action="#">
                                                <div id="ec_news_signup" className="ec-form">
                                                    <input className="ec-email" type="email" required=""
                                                        placeholder="Enter your email" name="ec-email" />
                                                    <button id="ec-news-btn" className="button btn-primary" type="submit"
                                                        name="subscribe" value="">Đăng ký</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="ec-footer-widget ec-share">
                                    <ul>
                                        <li className="ec-share-link"><a href="#"><img src="/assets/images/icons/iphone.png"
                                            alt="" /></a></li>
                                        <li className="ec-share-link"><a href="#"><img src="/assets/images/icons/google.png"
                                            alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* <!-- Footer Copyright Start --> */}
                            <div className="col footer-copy">
                                <div className="footer-bottom-copy ">
                                    <div className="ec-copy"> <a className="site-name" href="#">TCO SHOP</a>. 
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Footer Copyright End --> */}
                            {/* <!-- Footer payment --> */}
                            <div className="col footer-bottom-right">
                                <div className="footer-bottom-payment d-flex justify-content-end">
                                    <div className="payment-link">
                                        <img src="/assets/images/icons/payment.png" alt=""/>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- Footer payment --> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer