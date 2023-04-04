import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../../../firebase/config'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect } from 'react'
import dotenv from 'dotenv'
import { Link } from 'react-router-dom'
import { getFirestore, doc, getDoc, getDocs, collection, query } from 'firebase/firestore'
import { Eggy } from '@s-r0/eggy-js';
import SideNav from './SideNav'
import NavTop from './NavTop'
import { Outlet, useNavigate } from 'react-router-dom'
import adminSlice from '../../../store/sclice/adminSlice'
import { useDispatch, useSelector } from 'react-redux'
import { list } from 'firebase/storage'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const MainLayOut = (props) => {
    // console.log(props)
    const arrVaiTro = ['ADMIN', 'QTV'];
    const navigate = useNavigate();
    const arrDH = []
    const dispatch = useDispatch()
    const [arr, setArr] = useState([])

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const refUser = doc(db, "Users", user.uid)
                const data = await getDoc(refUser)
                const check = arrVaiTro.includes(data.data().vaitro);
                // dispatch(adminSlice.actions.setListUser(arrDH))

                getListUser()
                // console.log(arrDH)
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

                // console.log("aasdsad")
            }
        })
    }, [])

    // console.log(arrDH)

    const getListUser = async () => {
        let q = query(collection(db, "Users"))
        const querySnapshot = await getDocs(q);
        let arr = []
        let listU = []
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            if(doc.data().cart != undefined){
                arr.push({
                    uid: doc.id,
                    cart: doc.data().cart
                })
            }
            listU.push(doc.data())
        });

        // console.log(listU)

        dispatch(adminSlice.actions.setListUser(listU))
        dispatch(adminSlice.actions.setCarts(arr))
    }


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