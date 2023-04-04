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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

const CartAdmin = (props) => {

    const dispatch = useDispatch()
    const carts = useSelector(getCarts)
    // console.log(carts)

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
                                    <th>ID USER</th>
                                    <th>ID ĐƠN HÀNG</th>
                                    <th>NGÀY</th>
                                    <th>TRẠNG THÁI</th>

                                </tr></thead>
                                <tbody>
                                    {
                                        carts.map(item => {
                                            return(
                                                <>
                                                    {
                                                        item.cart.map((i,id) => {
                                                            return(
                                                                <>
                                                                    <tr>
                                                                        <td>{item.uid}</td>
                                                                        <td><Link>{i.uid}</Link></td>
                                                                        <td>{i.profile.date}</td>
                                                                        <td>{i.status}</td>
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