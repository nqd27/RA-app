import React from 'react'
import { getFirestore, doc, getDoc, collection, getDocs, setDoc, query, where, deleteDoc } from 'firebase/firestore'
import { firebaseConfig } from '../../../firebase/config'
import { initializeApp } from 'firebase/app'
import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { async } from '@firebase/util'
import { Button, NativeSelect, FormControl, InputLabel } from '@mui/material'
import { getStorage, ref, deleteObject } from "firebase/storage";
import { Eggy } from '@s-r0/eggy-js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

const ProductAdmin = (props) => {
    const arrVaiTro = ['ADMIN', 'QTV'];
    const [data, setData] = useState([])
    const navigate = useNavigate();
    const [vaitro, setVaitro] = useState()
    const [option, setOption] = useState('ALL')
    const [checkDel, setCheckDel] = useState('')
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {

                // const q = query(collection(db, "Product"));
                if (option != "ALL") {
                    const q = query(collection(db, "Product"), where("categories", "==", option));
                    const querySnapshot = await getDocs(q);
                    setData(querySnapshot.docs)

                } else {
                    const q = query(collection(db, "Product"));
                    const querySnapshot = await getDocs(q);
                    setData(querySnapshot.docs)

                }

            }
        })
    }, [option, checkDel])


    const changeCategories = async (e) => {
        let value = e.target.value;
        // console.log(e.target.value)
        setOption(value)
    }

    const deleteProduct = async (uid) => {
        // console.log(uid)
        // Create a reference to the file to delete
        const desertRef = ref(storage, `product/${uid}`);
        await deleteDoc(doc(db,`Product/${uid}`))

        // Delete the file
        deleteObject(desertRef).then(async () => {
            // File deleted successfully
            // console.log("Xóa thành công")
            Eggy({
                title: ' ',
                message: `Xóa sản phẩm thành công`,
                type: 'success',
                duration: 100
            });
            setCheckDel(uid)

        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error)
        });



    }

    if (data) {
        return (
            <>
                <div className="titles">
                    <h1>{props.title}</h1>
                </div>

                <div className="selectRule">
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Select option
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}

                            onChange={changeCategories}
                        >
                            <option value={"ALL"}>TẤT CẢ SẢN PHẨM</option>
                            <option value={"ĐIỆN THOẠI"}>ĐIỆN THOẠI</option>
                            <option value={"LAPTOP"}>LAPTOP</option>
                            <option value={"MÁY ẢNH"}>MÁY ẢNH</option>
                        </NativeSelect>
                    </FormControl>
                </div>

                <div className="render-data" >
                    <div className="products" ng-app="app" ng-controller="AppCtrl">

                        <md-content layout-padding>
                            <div className="tables">
                                <table className="table  table-striped table-bordered table-hover table-checkable order-column dataTable">
                                    <thead><tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Avatar</th>
                                        <th>Price</th>
                                        <th>Categories</th>
                                        <th>Description</th>

                                        <th colSpan='2'></th>
                                    </tr></thead>
                                    <tbody>
                                        {
                                            data.map((item, index) => {


                                                return (
                                                    <tr key={index}>
                                                        <td style={{ overflow: 'hidden' }}><span>{index + 1}</span></td>
                                                        <td><span className="name">{item.data().name}</span>
                                                        </td>
                                                        <td className='avatar'><img src={item.data().images[0]} style={{
                                                            height: '200px',
                                                            width: '200px'
                                                        }} alt="" /></td>
                                                        <td>{item.data().price}</td>
                                                        <td>{item.data().categories}</td>
                                                        <td><span className="label label-success">{item.data().description}</span></td>
                                                        <td ><Link to={`../edit/${item.data().uid}`}>
                                                            <Button variant="contained" color='primary'>
                                                                Edit
                                                            </Button>
                                                        </Link></td>
                                                        <td >

                                                            <Button variant="outlined" color='error' onClick={() => {
                                                                deleteProduct(item.data().uid)
                                                            }}>
                                                                Del
                                                            </Button>

                                                        </td>
                                                    </tr>
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

}

export default ProductAdmin