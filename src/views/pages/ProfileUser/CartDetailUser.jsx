import NavTop from './NavTop'
import SideNave from './SideNave'
import { firebaseConfig } from '../../../firebase/config'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import '../../../assets/css/cartUser.scss'
import accountSlice from '../../store/sclice/accountSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile } from '../../store/selectors/accountSelector'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../../../assets/css/cartUser.scss'
import currency from 'currency.js'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)


const CartDetailUser = () => {
    const uidC = useParams().uid
    const dispatch = useDispatch()
    // const [data, setData] = useState({})
    const location = useLocation();
    const profile = useSelector(getProfile)
    const date = new Date()
    const arrP = []

    // const ar = []
    // console.log(profile.cart)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                // console.log(user)

                const docRef = doc(db, "Users", uid);
                const docSnap = await getDoc(docRef);

                

                dispatch(accountSlice.actions.getProfile(docSnap.data()))
            } else {
                window.location = `${import.meta.env.VITE_LOCAL_URL}`
            }
        })
    }, [])

    if (profile.cart != undefined) {
        profile.cart.forEach(item => {
            if (item.uid == uidC) {
                arrP.push(item.listCart)
            }
        })
    }

    console.log(arrP)
    return (
        <>
            <NavTop title={location.state} />
            <SideNave />
            <div className="title-pro-cart" style={{
                marginLeft: '420px',
                marginTop: '30px'
            }}>
                <span>Đơn hàng: <b>{uidC}</b></span>
                
            </div>
            <div className='listProductCart'>
                {
                    arrP[0] != undefined ?
                        arrP[0].map((item, index) => {
                            return (
                                <>
                                    <div className="list-product-cart">
                                        <div className="img">
                                            <img src={item.url} alt="" />
                                            <div className="titleP">
                                                <div className="message-pro-cart">
                                                    <span>Name: </span>
                                                    <b>{item.name}</b>
                                                </div>
                                                <div className="message-pro-cart">
                                                    <span>Price: </span>
                                                    <b>{currency(item.price, { symbol: '', separator: '.', decimal: ',', fromCents: true, precision: 0 }).format()} VND</b>
                                                </div>
                                                <div className="message-pro-cart">
                                                    <span>Quantity: </span>
                                                    <b>{item.quantity}</b>
                                                </div>
                                                <div className="message-pro-cart">
                                                    <span>Note: </span>
                                                    <b>{item.note ? item.note : "Không có yêu cầu!"}</b>
                                                </div>
                                                <div className="message-pro-cart">
                                                    <span>Thành Tiền (VAT 10%): </span>
                                                    <b>{currency(item.price*0.9, { symbol: '', separator: '.', decimal: ',', fromCents: true, precision: 0 }).format()} VND</b>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })

                        : ""
                }

            </div>
        </>
    )
}

export default CartDetailUser