import React from 'react'
import { firebaseConfig } from '../../../firebase/config'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { Eggy } from '@s-r0/eggy-js';
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { async } from '@firebase/util'
import { useNavigate } from 'react-router-dom'
// import login from '../../../assets/images/pikachu.png'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)


const LoginAdmin = (props) => {
    const navigate = useNavigate()
    const { hide } = props;
    console.log(hide)
    const arrVaiTro = ['ADMIN', 'QTV'];

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const refUser = doc(db, "Users", user.uid)
                const data = await getDoc(refUser)
                const check = arrVaiTro.includes(data.data().vaitro);
                console.log(check)

                if (check) {
                        navigate('../main')
                }

                // auth.signOut()
            }
        })

        if(hide){
            let navTop = document.querySelector('.nav-top');
            let sideNav = document.querySelector('.side-nav');
            let main = document.querySelector('.container-admin');
            navTop.style.display = 'none';
            sideNav.style.display = 'none';
            // main.style.display = 'none';
        }
    }, [])

    const signUpAdmin = async () => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // console.log(email, password)
        if (!email || !password) {
            Eggy({
                title: 'Sign in',
                message: `Vui lòng điền đầy đủ thông tin!!`,
                type: 'error',
                duration: 1000
            })
        } else {
            await signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const refUser = doc(db, "Users", user.uid)
                    const data = await getDoc(refUser)

                    if (data) {
                        const check = arrVaiTro.includes(data.data().vaitro);

                        if (check) {
                            await Eggy({
                                title: 'Sign in',
                                message: `Đăng nhập thành công!!`,
                                type: 'success',
                                duration: 1000
                            })
                                navigate('../main')
                        } else {
                            await Eggy({
                                title: 'Sign in',
                                message: `Bạn không thể truy cập page`,
                                type: 'error',
                                duration: 1000
                            })
                        }
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorMessage) {
                        Eggy({
                            title: 'Sign in',
                            message: `Sai thông tin email hoặc mật khẩu!!`,
                            type: 'error',
                            duration: 1000
                        })
                    }

                });
        }
    }

    return (
        <>
            <div className="contaier-login">
                <div className="main-login-admin">
                    <div className="left-login">
                        <form>
                            <h1>LOGIN</h1>
                            <div className="control">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' />
                            </div>

                            <div className="control">
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' />
                            </div>

                            <div className="btn-login-admin">
                                <button type='button' className='btn btn-primary btn-login' onClick={signUpAdmin}>Login</button>
                            </div>
                        </form>
                    </div>
                    {/* <div className="right-login">
                        <img src={login} alt="" />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default LoginAdmin