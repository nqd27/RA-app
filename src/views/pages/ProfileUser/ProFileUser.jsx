import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link, useLocation } from 'react-router-dom'
import NavTop from './NavTop'
import SideNave from './SideNave'
import { firebaseConfig } from '../../../firebase/config'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import MainProfile from './MainProfile'
import { useDispatch, useSelector } from 'react-redux'
import accountSlice from '../../store/sclice/accountSlice'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

function ProFileUser() {
  const dispatch = useDispatch()
  const location = useLocation();
  // console.log(location.state)
  // console.log(sure)
  const [data, setData] = useState({})
  const [data2, setData2] = useState();
  const [checkEdit, setCheckEdit] = useState(false);
  const arrA = []
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        setData({
          uid: uid,
          emailVerified: user.emailVerified,
        })

        const docRef = doc(db, "Users", uid);
        const docSnap = await getDoc(docRef);
        setData2(docSnap.data())
        dispatch(accountSlice.actions.getProfile(docSnap.data()))
      } else {
        window.location = `${import.meta.env.VITE_LOCAL_URL}`
      }
    })
  }, [checkEdit])
  // console.log(data2)

  if (data.emailVerified) {
    if (data2) {
      return (
        <>
          <div>
            <NavTop title={location.state}/>
            <SideNave data={data2}/>
            <MainProfile data={data2} uid={data.uid} checkEdit={setCheckEdit}/>
          </div>
        </>
      )
    }
  } else{
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

export default ProFileUser