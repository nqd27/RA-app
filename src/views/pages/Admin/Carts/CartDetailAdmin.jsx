import React from 'react'
import { getFirestore, doc, getDoc, collection, getDocs, setDoc, query, where, deleteDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { async } from '@firebase/util'
import { Button, NativeSelect, FormControl, InputLabel } from '@mui/material'
import { getStorage, ref, deleteObject } from "firebase/storage";
import { Eggy } from '@s-r0/eggy-js';
import { firebaseConfig } from '../../../../firebase/config'
import { getCarts } from '../../../store/selectors/adminSelector'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import currency from 'currency.js'


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

const CartDetailAdmin = (props) => {

    const dispatch = useDispatch()
    const carts = useSelector(getCarts)
    const uidP = useParams().id
    const uidU = useParams().idU
    const location = useLocation()

    console.log('List cart', location.state)
    // console.log(uidU)

    useEffect(() => {
        console.log("asasa", carts)
    }, [])


    return (
        <>
            <div className="titles">
                <h1>{props.title}</h1>
            </div>
            <div className="render-data" >
                <div className="products" ng-app="app" ng-controller="AppCtrl">

                    <md-content layout-padding>
                        <div className="tables">
                            <table className="table  table-striped table-bordered table-hover table-checkable order-column dataTable">
                                <thead>
                                    <tr>
                                        <th>ID PRODUCT</th>
                                        <th>IMAGES</th>
                                        <th>QUANTITY</th>
                                        <th>PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        location.state.listCart.map((item,i) => {
                                            return(
                                                <>
                                                    <tr key={i}>
                                                        <td>{item.uid}</td>
                                                        <td><img src={item.url} style={{
                                                            height: '200px',
                                                            width: '300px'
                                                        }} alt="" /></td>
                                                        <td>{item.quantity}</td>
                                                        <td>{currency(item.price, { symbol: '', separator: '.', decimal: ',', fromCents: true, precision: 0 }).format()} VND</td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>

                            </table>
                        </div>
                    </md-content>
                </div>
            </div>
        </>
    )
}

export default CartDetailAdmin