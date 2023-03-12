import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../../firebase/config'
import { getFirestore } from 'firebase/firestore'

function Signup() {
    return (
        <>
            <Header />
            <section className="ec-page-content section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                        </div>
                        <div className="ec-register-wrapper">
                            <div className="ec-register-container">
                                <div className="ec-register-form">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-md-5">
                                                <div className="card">
                                                    <div className="card-body py-md-4">
                                                        <div className="section-title" style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                                                            <h2 className="ec-bg-title">Đăng Ký Thành Viên</h2>
                                                            <p className="sub-title mb-3">Nơi tốt nhất để mua và bán các sản phẩm công nghệ</p>
                                                        </div>
                                                        <form _lpchecked="1">
                                                            <div className="form-group" style={{ marginTop: '10px' }}>
                                                                <input type="email" className="form-control" id="email" placeholder="Email" />
                                                            </div>
                                                            <div className="form-group" style={{ marginTop: '10px' }}>
                                                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                                            </div>
                                                            <div className="form-group" style={{ marginTop: '10px' }}>
                                                                <input type="password" className="form-control" id="confirm-password" placeholder="confirm-password" />
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center justify-content-between">
                                                                <a href=""></a>
                                                                <button className="btn btn-primary" style={{ marginTop: '10px', borderRadius: "10px" }}>Create Account</button>
                                                            </div>
                                                        </form>
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
            <Footer />
        </>
    )
}

export default Signup