import React from 'react'
import { useLocation } from 'react-router-dom'
import NavTop from './NavTop'
import SideNave from './SideNave'
import { firebaseConfig } from '../../../firebase/config'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export const CartProfileUser = () => {
    const [data, setData] = useState({})
    const location = useLocation();
    // console.log(location.state)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user){
                const uid = user.uid;
                // console.log(user)
                setData({
                  uid: uid,
                  emailVerified: user.emailVerified,
                })
            }else{
                window.location = `${import.meta.env.VITE_LOCAL_URL}`
            }
        })
    },[])

    if(data.emailVerified){
        return (
            <>
                <NavTop title={location.state}/>
                <SideNave />
                <div className="main" id='MainProfile'>
                    <h2>DANH THIẾP</h2>
                    <div className="card" style={{
                        height: '380px',
                        overflow: 'hidden',
                    }}>
                        <div className="card-body" id='editProflie'>
                            <h1>Cart</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }else{
        return (
            <>
              <div>
                <NavTop title={location.state}/>
                <SideNave />
                <div className="main">
                  <h1>Bạn chưa xác thực Email của chúng tôi.</h1>
                  <h2>Vui lòng xác thực email.</h2>
                </div>
              </div>
            </>
          )
    }
    
}
