import React from 'react'
import { useParams } from 'react-router-dom'
import { Eggy } from '@s-r0/eggy-js';
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { useEffect, useState } from 'react'
import { firebaseConfig } from '../../../firebase/config';
import { getFirestore, doc, getDoc, collection, getDocs, setDoc, query, where, deleteDoc } from 'firebase/firestore'
import { async } from '@firebase/util';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

const EditProduct = (props) => {
    const uid = useParams().uid;
    // console.log(uid)
    const navigate = useNavigate()
    const arrVaiTro = ['ADMIN'];
    const [check, setCheck] = useState()
    const [dataP, setDataP] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // console.log(user.uid)
                const refUser = doc(db, "Users", user.uid)
                const dataU = await getDoc(refUser)
                // console.log(dataU.data())
                const check1 = arrVaiTro.includes(dataU.data().vaitro);
                // console.log(check1)
                setCheck(check1)

                if (check1) {
                    const refProduct = doc(db, "Product", uid)
                    const dataPro = await getDoc(refProduct)
                    // console.log(dataPro.data())
                    setDataP(dataPro.data())
                } else {
                    Eggy({
                        title: ' ',
                        message: `Bạn không đủ thẩm quyền`,
                        type: 'error',
                        duration: 2000
                    });
                    // setTimeout(() => {
                    navigate('..')
                    // }, 1000);
                }


            } else {
                navigate('/home')
            }
        })
    }, [])

    const editPro = async () => {
        let formFile = document.querySelector("#formFile").files;
        let name = document.querySelector("#name").value;
        let price = document.querySelector("#price").value;
        let categories = document.querySelector("#categories").value;
        let description = document.querySelector("#description").value;
        
        // console.log(formFile[0])
        if(confirm("Update chứ?")){
            if(!formFile[0]){
                let dataUpdateProduct = {
                    name: name,
                    price: price,
                    categories: categories,
                    description: description,
                    uid: uid,
                    images: [
                        dataP.images[0]
                    ]
                }    
    
                // console.log(dataUpdateProduct)
                try {
                    await setDoc(doc(db,"Product",uid),dataUpdateProduct)
                    Eggy({
                        title: '',
                        message: `Cập nhật thông tin thành công!`,
                        type: 'success',
                        duration: 1000
                    });
                    setTimeout(() => {
                        navigate('..')
                    }, 1000);
                } catch (error) {
                    console.log(error)
                }
                // console.log(dataP.images[0])
            }else{
                // console.log(uid)
                let urlMain = document.querySelector("#urlMain")
                let dataUpdateProduct = {
                    name: name,
                    price: price,
                    categories: categories,
                    description: description,
                    uid: uid,
                    images: [
                        urlMain.src
                    ]
                }    
    
                // console.log(dataUpdateProduct)

                
                try {
                    await setDoc(doc(db,"Product", uid),{
                        name: name,
                        price: price,
                        categories: categories,
                        description: description,
                        uid: uid,
                        images: [
                            urlMain.src
                        ]
                    })
                    Eggy({
                        title: '',
                        message: `Cập nhật thông tin thành công!`,
                        type: 'success',
                        duration: 1000
                    });
                    setTimeout(() => {
                        navigate('..')
                    }, 1000);
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
    
    const changeImage = async (e) => {
        console.log(e.target.files[0])
        let file = e.target.files[0]
        let urlMain = document.querySelector("#urlMain")

        let metadata = {
            contentType: file.type,
        };

        const uploadTask = await uploadBytes(ref(storage, `product/${uid}`), file, metadata)
        const url = await getDownloadURL(ref(storage, `product/${uid}`))

        // console.log(url)
        urlMain.src = url
    }
    // console.log(check)
    // console.log("dataP:",dataP)

    if (check && dataP) {
        return (
            <>
                <div className="titles">
                    <h1>{props.title}</h1>
                </div>

                <div className="render-data">
                    <div className="form-edit-product">
                        <div className="left-box">
                            <div className="img">
                                <img src={dataP.images[0]} id="urlMain" alt="" />
                            </div>

                            <div className="changeImg">
                            <Form.Group className="mb-3" controlId="urlOld">
                                <Form.Control disabled type="hidden" defaultValue={dataP.images[0]}/>
                            </Form.Group>
                            </div>

                            
                        </div>

                        <div className="right-box">
                        <div className="form-add">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control type="text" defaultValue={dataP.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Giá sản phẩm</Form.Label>
                        <Form.Control type="text" defaultValue={dataP.price}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <label htmlFor='categories'>Thể loại</label>
                        <Form.Select aria-label="Default select example" id='categories' defaultValue={dataP.categories}>
                            <option value="ĐIỆN THOẠI">ĐIỆN THOẠI</option>
                            <option value="LAPTOP">LAPTOP</option>
                            <option value="MÁY ẢNH">MÁY ẢNH</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Hình ảnh</Form.Label>
                        <Form.Control type="file" onChange={changeImage}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control as="textarea" defaultValue={dataP.description} rows={3} />
                    </Form.Group>
                    {/* <Form.Group className="mb-3 mx-auto"> */}
                    <Button variant="primary" onClick={editPro}>Chỉnh sửa sản phẩm</Button>
                    {/* </Form.Group> */}

                </div>
                        </div>
                    </div>
                </div>


            </>
        )
    } else {
        return (
            <>
                <div className="titles">
                    <h1>{props.title}</h1>
                </div>

            </>
        )
    }
}

export default EditProduct