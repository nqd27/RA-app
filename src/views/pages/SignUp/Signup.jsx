import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../../firebase/config'
import { getFirestore, collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Eggy } from '@s-r0/eggy-js';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

function Signup() {

    const register = () => {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let form = document.querySelector("#formRegister");
        form.reset();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.uid)
                Eggy({
                    title:  'Đăng ký tài khoản',
                    message:  'Đăng ký thành công, vui lòng kiểm tra email',
                  });
                sendEmailVerification(auth.currentUser).then(
                    async () => {
                        // let url = `localhost:5173/login`;
                        // window.location = `http://localhost:5173/login` ;
                        try {
                            await setDoc(doc(db, "Users", user.uid), {
                                address: '',
                                hoppy: '',
                                job: '',
                                miniCart: [],
                                cart: [],
                                uid: user.uid,
                                email: user.email,
                                name: '',
                                phone: '',
                                password: password,
                                status: false,
                                vaitro: 'KHACHHANG',
                                ps: password,
                                avatart: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6I8oImT78Z9evf6tqMpcJ0wRwa5ibeFhWwnzsxg--WrOP7KiREcOJl8phDE8NvFuVuIA&usqp=CAU'
                              });
                              setTimeout(() => {
                                window.location = `http://localhost:5173/login`
                              }, 3000);
                          } catch (e) {
                            console.error("Error adding document: ", e);
                          }

                    }
                )
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Eggy({
                    title:  'Đăng ký tài khoản',
                    message:  `Email đã tồn tại!!!`,
                    type: 'error'
                  });
                // ..
            });
    }

    return (
        <>
            {/* <Header /> */}
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
                                                        <div className="section-title" style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                                                            <h2 className="ec-bg-title">Đăng Ký Thành Viên</h2>
                                                            <p className="sub-title mb-3">Nơi tốt nhất để mua và bán các sản phẩm công nghệ</p>
                                                        </div>
                                                        <form id='formRegister' _lpchecked="1">
                                                            <div className="form-group" style={{ marginTop: '10px' }}>
                                                                <input type="email" className="form-control" id="email" placeholder="Email" />
                                                            </div>
                                                            <div className="form-group" style={{ marginTop: '10px' }}>
                                                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center justify-content-between">
                                                                <a href=""></a>
                                                                <button className="btn btn-primary" type='button' style={{ marginTop: '10px', borderRadius: "10px" }} onClick={register}>Create Account</button>
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
            {/* <Footer /> */}
        </>
    )
}

export default Signup