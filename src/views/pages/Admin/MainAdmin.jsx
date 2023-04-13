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

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux'


// const app = initializeApp(firebaseConfig)
// const auth = getAuth(app)
// const db = getFirestore(app)

const MainAdmin = (props) => {
    // const arrVaiTro = ['ADMIN', 'QTV'];
    // console.log(props.title)
    const sales = {
        'LAPTOP': 0,
        'MÁY ẢNH': 0,
        'ĐIỆN THOẠI': 0
    }
    const storage = useSelector((state) => state.admin.Storage)
    console.log(storage)
    storage.forEach((item,index) => {
        // console.log(item)
        if(item.product == 'LAPTOP'){
            // console.log(sales['LAPTOP'] += )
            Object.keys(item.stores).forEach(((i) => {
                // console.log(item.stores[i].SALE)
                sales['LAPTOP'] += item.stores[i].SALE
            }))
            
            
        }else if(item.product == 'ĐIỆN THOẠI'){
            Object.keys(item.stores).forEach(((i) => {
                // console.log(item.stores[i].SALE)
                sales['ĐIỆN THOẠI'] += item.stores[i].SALE
            }))
        }else{
            Object.keys(item.stores).forEach(((i) => {
                // console.log(item.stores[i].SALE)
                sales['MÁY ẢNH'] += item.stores[i].SALE
            }))
        }
    })
    console.log(sales)


    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['ĐIỆN THOẠI', 'LAPTOP', 'MÁY ẢNH'],
        datasets: [
            {
                label: 'Sản phẩm bán được',
                data: [sales['ĐIỆN THOẠI'], sales['LAPTOP'], sales['MÁY ẢNH']],
                backgroundColor: [
                    '#ffe79a',
                    '#ffa952',
                    '#ef5a5a'
                ],
                borderColor: [
                    '#ffe79a',
                    '#ffa952',
                    '#ef5a5a'
                ],
                borderWidth: 1,
            },
        ],
    };

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
            <div className="render-data" style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* <img src={login} alt="" /> */}
                <div style={{
                    height: '400px',
                    width: '400px',
                }}>
                    <Pie data={data} />
                </div>
            </div>
        </>
    )
}

export default MainAdmin