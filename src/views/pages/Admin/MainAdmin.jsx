import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../../firebase/config'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect } from 'react'
import dotenv from 'dotenv'
import { Link } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { Eggy } from '@s-r0/eggy-js';
import SideNav from './Layout/SideNav'
import NavTop from './Layout/NavTop'
import login from '../../../assets/images/login.gif'

// const app = initializeApp(firebaseConfig)
// const auth = getAuth(app)
// const db = getFirestore(app)

const MainAdmin = (props) => {
    // const arrVaiTro = ['ADMIN', 'QTV'];
    console.log(props.title)

    useEffect(() => {
        let navTop = document.querySelector('.nav-top');
                    let sideNav = document.querySelector('.side-nav');
                    let main = document.querySelector('.container-admin');
                    navTop.style.display = 'flex';
                    sideNav.style.display = 'flex';
                    main.style.display = 'flex';
    }, [])

    return (
        <>
            <div className="titles">
                <h1>{props.title}</h1>
            </div>
            <div className="render-data">
                <img src={login} alt="" />
            </div>
        </>
    )
}

export default MainAdmin