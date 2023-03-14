import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { firebaseConfig } from '../../../firebase/config'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth'
import { Eggy } from '@s-r0/eggy-js';
import { useEffect } from 'react'



function Login() {

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log(uid)
            //   alert("Bạn đã đăng nhập!!!")
            setInterval(() => {
                window.location = "http://localhost:5173/"
            }, 1500);
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
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                let data = {
                    timeLogin: user.metadata.lastSignInTime,
                    uid: user.uid,
                    status: user.emailVerified
                }
                // console.log(user)
                console.log(data)
                Eggy({
                    title: 'Sign In',
                    message: `Đăng nhập thành công!`,
                    type: 'success',
                    duration: 1000
                });

                setInterval(() => {
                    window.location = "http://localhost:5173/"
                }, 1500);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                Eggy({
                    title: 'Sign In',
                    message: `Đăng nhập thất bại!`,
                    type: 'error',
                    duration: 1000
                });
            });
    }

    return (
        <>
            <Header />
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
            <Footer />
        </>
    )
}

export default Login