import React from 'react'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../../firebase/config'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect } from 'react'
import dotenv from 'dotenv'
import { Link } from 'react-router-dom'
import { async } from '@firebase/util'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { Eggy } from '@s-r0/eggy-js';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const MainAdmin = () => {
    const arrVaiTro = ['ADMIN', 'QTV'];

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const refUser = doc(db, "Users", user.uid)
                const data = await getDoc(refUser)
                const check = arrVaiTro.includes(data.data().vaitro);
                // console.log(check)
                if (!check) {
                    alert('Bạn không thể truy cập page')
                    window.location = `${import.meta.env.VITE_LOCAL_URL}`
                }
            } else {
                window.location = `${import.meta.env.VITE_LOCAL_URL}admin`
            }
        })
    }, [])

    return (
        <>
            <div className="container-admin">
                <div className="nav-top">
                        
                </div>
                <div className="side-nav">
                        
                </div>
                <div className="main-admin">
                        
                </div>
            </div>
        </>
    )
}

export default MainAdmin