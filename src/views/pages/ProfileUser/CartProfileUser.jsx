import React from 'react'
import { useLocation } from 'react-router-dom'
import NavTop from './NavTop'
import SideNave from './SideNave'
import { firebaseConfig } from '../../../firebase/config'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import '../../../assets/css/cartUser.scss'
import accountSlice from '../../store/sclice/accountSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile } from '../../store/selectors/accountSelector'
import { Link } from 'react-router-dom'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export const CartProfileUser = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const location = useLocation();
    const profile = useSelector(getProfile)
    const date = new Date()
    // console.log(profile)
    // console.log(location.state)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                // console.log(user)
                setData({
                    uid: uid,
                    emailVerified: user.emailVerified,
                })
                const docRef = doc(db, "Users", uid);
                const docSnap = await getDoc(docRef);
                dispatch(accountSlice.actions.getProfile(docSnap.data()))
            } else {
                window.location = `${import.meta.env.VITE_LOCAL_URL}`
            }
        })
    }, [])

    if (data.emailVerified) {
        return (
            <>
                <NavTop title={location.state} />
                <SideNave />
                <div className="main" id='MainProfile'>
                    <h2>ĐƠN HÀNG CỦA BẠN</h2>
                    <div className="card" style={{
                        // height: '380px',
                        // overflow: 'hidden',
                        padding: "0px"
                    }}>
                        <div className="card-body" id='editProflie'>
                            {
                                profile.cart
                                    ?

                                    profile.cart.map((item,index) => {
                                        return (
                                            <>
                                                <div className="cart" key={index}>
                                                    <div className="title-cart">

                                                        <div>
                                                            Mã Đơn hàng: <Link to={`${item.uid}`} state={"Đơn hàng chi tiết"}><b>{item.uid}</b></Link>
                                                        </div>

                                                        <div>
                                                            Trạng thái: <i>{item.status}</i>
                                                        </div>

                                                        <i>{item.profile.date}</i>
                                                    </div>

                                                    
                                                </div>
                                            </>
                                        )
                                    })

                                    :

                                    ""
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>
                    <NavTop title={location.state} />
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
