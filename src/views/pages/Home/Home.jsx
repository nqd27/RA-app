import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'
import MainHome from './MainHome'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../../firebase/config'
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect } from 'react'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default function Home() {

  return (
    <>
      <Header />
      {/* <Slider /> */}
      <MainHome />
      <Footer />
    </>
  )
}
