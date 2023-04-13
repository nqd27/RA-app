import React from 'react'
import { getFirestore, doc, getDoc, collection, updateDoc, getDocs, setDoc, query, where, deleteDoc } from 'firebase/firestore'
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
import Form from 'react-bootstrap/Form';
import adminSlice from '../../../store/sclice/adminSlice'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

const CartAdmin = (props) => {

    const dispatch = useDispatch()
    const carts = useSelector(getCarts)
    const uidUser = localStorage.getItem('UID')

    // console.log(uidUser)

    const changeStatus = (e) => {
        let iCs = e.target.parentNode.parentNode.childNodes[0].innerText
        let iC = e.target.parentNode.parentNode.childNodes[1].innerText
        let idCart = e.target.parentNode.parentNode.childNodes[3].childNodes[0].innerText
        let status = e.target.value
        carts.forEach((item, index) => {
            item.cart.forEach(async (it, id) => {
                if (it.uid == idCart) {
                    dispatch(adminSlice.actions.setStatusCart({ iCs, iC, status }))
                    let refU = doc(db, "Users", uidUser)
                    let arN = []

                    carts[iCs].cart.forEach((a, b) => {
                        if (b == iC) {
                            let objCartUpdate = {
                                listCart: carts[iCs].cart[b].listCart,
                                profile: carts[iCs].cart[b].profile,
                                status: status,
                                uid: carts[iCs].cart[b].uid
                            }
                            arN.push(objCartUpdate)
                        } else {
                            let objCartUpdate = {
                                listCart: carts[iCs].cart[b].listCart,
                                profile: carts[iCs].cart[b].profile,
                                status: carts[iCs].cart[b].status,
                                uid: carts[iCs].cart[b].uid
                            }
                            arN.push(objCartUpdate)
                        }
                    })

                    console.log(arN)

                    await updateDoc(refU, {
                        cart: arN
                    })

                    await Eggy({
                        title: ' ',
                        message: 'Change status order success!!!',
                      });
                }
            })
        })

    }

    return (
        <>
            <div className="titles">
                <h1>{props.title}</h1>
            </div>

            <div className="selectRule">
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        STATUS
                    </InputLabel>
                    <NativeSelect
                        defaultValue={30}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}

                    // onChange={changeCategories}
                    >
                        <option value={"ALL"}>TẤT CẢ ĐƠN HÀNG</option>
                        <option value={"CHƯA DUYỆT"}>CHƯA DUYỆT</option>
                        <option value={"ĐÓNG GÓI"}>ĐANG ĐÓNG GÓI</option>
                        <option value={"VẬN CHUYỂN"}>VẬN CHUYỂN</option>
                    </NativeSelect>
                </FormControl>
            </div>

            <div className="render-data" >
                <div className="products" ng-app="app" ng-controller="AppCtrl">

                    <md-content layout-padding>
                        <div className="tables">
                            <table className="table  table-striped table-bordered table-hover table-checkable order-column dataTable">
                                <thead><tr>
                                    <th style={{
                                        display: 'none'
                                    }}>ID Carts</th>
                                    <th style={{
                                        display: 'none'
                                    }}>ID Cart</th>
                                    <th>ID USER</th>
                                    <th>ID ĐƠN HÀNG</th>
                                    <th>NGÀY</th>
                                    <th>TRẠNG THÁI</th>

                                </tr></thead>
                                <tbody>
                                    {
                                        carts.map((item, uidd) => {
                                            return (
                                                <>
                                                    {
                                                        item.cart.map((i, id) => {
                                                            return (
                                                                <>
                                                                    <tr key={i.uid}>
                                                                        <td style={{
                                                                            display: 'none'
                                                                        }}>{uidd}</td>
                                                                        <td style={{
                                                                            display: 'none'
                                                                        }}>{id}</td>
                                                                        <td>{item.uid}</td>
                                                                        <td><Link to={`../uid/${i.uid}/${item.uid}`} state={i}>{i.uid}</Link></td>
                                                                        <td>{i.profile.date}</td>
                                                                        <td>
                                                                            {
                                                                                i.status != "HOÀN THÀNH" ?

                                                                                    <Form.Select defaultValue={i.status} onChange={changeStatus}>
                                                                                        {/* <option>Open this select menu</option> */}
                                                                                        <option value="CHỜ DUYỆT">CHỜ DUYỆT</option>
                                                                                        <option value="ĐÓNG GÓI">ĐÓNG GÓI</option>
                                                                                        <option value="GIAO HÀNG">GIAO HÀNG</option>
                                                                                        <option value="HOÀN THÀNH">HOÀN THÀNH</option>
                                                                                    </Form.Select>

                                                                                    :

                                                                                    <Form.Select defaultValue={i.status} style={{
                                                                                        background: "black",
                                                                                        color: "White"
                                                                                    }} disabled>
                                                                                        {/* <option>Open this select menu</option> */}
                                                                                        <option value="CHỜ DUYỆT">CHỜ DUYỆT</option>
                                                                                        <option value="ĐÓNG GÓI">ĐÓNG GÓI</option>
                                                                                        <option value="GIAO HÀNG">GIAO HÀNG</option>
                                                                                        <option value="HOÀN THÀNH">HOÀN THÀNH</option>
                                                                                    </Form.Select>
                                                                            }

                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })
                                                    }
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

export default CartAdmin