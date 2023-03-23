import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../../../firebase/config'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect } from 'react'
import dotenv from 'dotenv'
import { Link } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { Eggy } from '@s-r0/eggy-js';
import SideNav from './SideNav'
import NavTop from './NavTop'
import { Outlet, useNavigate } from 'react-router-dom'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const MainLayOut = (props) => {
    // console.log(props)
    const arrVaiTro = ['ADMIN', 'QTV'];
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const refUser = doc(db, "Users", user.uid)
                const data = await getDoc(refUser)
                const check = arrVaiTro.includes(data.data().vaitro);
                // console.log(check)
                if (!check) {
                    navigate('..')
                }

                if (typeof hide === "undefined") {
                    let navTop = document.querySelector('.nav-top');
                    let sideNav = document.querySelector('.side-nav');
                    let main = document.querySelector('.container-admin');
                    navTop.style.display = 'flex';
                    sideNav.style.display = 'flex';
                    main.style.display = 'flex';
                }
            }
        })
    }, [])


    return (
        <>
            <div className="container-admin">
                <NavTop />
                <SideNav />
                <div className="container-admin">
                    <div className="main-admin" id='mainAdmin'>
                        <div className="wrapper-main-admin">

                            <div className="container-main">
                                
                                <div className="main-page-message">
                                    <Outlet />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MainLayOut