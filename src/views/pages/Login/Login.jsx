import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { firebaseConfig } from '../../../firebase/config'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { Eggy } from '@s-r0/eggy-js';
import { useEffect } from 'react'
import dotenv from 'dotenv'
import { Link } from 'react-router-dom'



function Login() {

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const checkLogin = localStorage.getItem("checkLogin");
    const [loginC, setLoginC] = useState(checkLogin)
    // console.log(checkLogin)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
            //   console.log(uid)
            //   alert("Bạn đã đăng nhập!!!")
            // setInterval(() => {
                // window.location = `${import.meta.env.VITE_LOCAL_URL}`
                localStorage.setItem("checkLogin",true)
                setLoginC(true)
                // console.log(import.meta.env.VITE_LOCAL_URL)
            // }, 1500);
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    },[])

    const handleLogin = async () => {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        let user = await signInWithEmailAndPassword(auth, email, password)

        console.log(user)
        let data = {
            timeLogin: user.user.metadata.lastSignInTime,
            uid: user.user.uid,
            status: user.user.emailVerified
        }
        // console.log(data)
        Eggy({
            title: 'Sign In',
            message: `Đăng nhập thành công!`,
            type: 'success',
            duration: 1000
        });
        if (user) {

        }
    }

    return (
        <>
            <Header />
            {
                !loginC?
                <main className="main">
                <div className="container">
                    <section className="wrapper">
                        <div className="heading">
                            <h1 className="text text-large">Sign In</h1>
                            <p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
                            </p>
                        </div>
                        <form name="signin" className="form">
                            <div className="input-control">
                                <label htmlFor="email" className="input-label" hidden>Email Address</label>
                                <input type="email" name="email" id="email" className="input-field" placeholder="Email Address" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password" id="password" className="input-field" placeholder="Password" />
                            </div>
                            <div className="input-control">
                                <input type="button" name="submit" className="input-submit" value="Đăng nhập" onClick={handleLogin} />
                            </div>
                            <a href="#" className="text text-links">Forgot Password?</a>

                        </form>
                        <div className="striped">
                            <span className="striped-line"></span>
                            <span className="striped-text">Or</span>
                            <span className="striped-line"></span>
                        </div>
                        <div className="method">
                            <div className="method-control">
                                <a href="#" className="method-action">
                                    <i className="ion ion-logo-google"></i>
                                    <span>Sign in with Google</span>
                                </a>
                            </div>
                            <div className="method-control">
                                <a href="#" className="method-action">
                                    <i className="ion ion-logo-facebook"></i>
                                    <span>Sign in with Facebook</span>
                                </a>
                            </div>
                            <div className="method-control">
                                <a href="#" className="method-action">
                                    <i className="ion ion-logo-apple"></i>
                                    <span>Sign in with Apple</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
                 :
                  <>
                    <div className="main">
                        <h1>Đăng nhập thành công</h1>
                        <h2>Về <Link id='pageChange' to='/'>trang chủ</Link> hoặc <Link id='pageChange' to='/profile'>trang cá nhân</Link></h2>
                        <img src="./src/assets/images/login.gif" alt="" />
                    </div>
                  </>
            }
            
            <Footer />
        </>
    )
}

export default Login