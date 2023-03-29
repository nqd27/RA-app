import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase/config';
import { async } from '@firebase/util';
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useNavigate } from 'react-router-dom';
import { Eggy } from '@s-r0/eggy-js';


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)


const AddProduct = (props) => {
    const navigate = useNavigate()

    const addProduct = async () => {
        let name = document.querySelector("#name").value;
        let price = document.querySelector("#price").value;
        let categories = document.querySelector("#categories").value;
        let file = document.querySelector("#formFile").files[0];
        let description = document.querySelector("#description").value;
        // console.log(file)
        let uid = uuidv4()

        let metadata = {
            contentType: file.type,
        };

        // console.log(uid)

        const uploadTask = await uploadBytes(ref(storage, `product/${uid}`), file, metadata)
        // console.log(uploadTask)

        const url = await getDownloadURL(ref(storage, `product/${uid}`))

        // console.log(url)

        let dataUpate = {
            categories: categories,
            description: description,
            name: name,
            price: price,
            uid: uid,
            images: [
                url
            ]
        }

        console.log(dataUpate)

        try {
            await setDoc(doc(db, "Product", uid), {
                categories: categories,
                description: description,
                name: name,
                price: price,
                uid: uid,
                images: [
                    url
                ]
            });
            Eggy({
                title: ' ',
                message: `Thêm sản phẩm thành công`,
                type: 'success',
                duration: 1000
            });

            setTimeout(() => {
                navigate('../main')
            }, 2000);

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            <div className="titles">
                <h1>{props.title}</h1>
            </div>

            <div className="render-data">
                <div className="form-add">
                    {/* <div className="form-add-product">
                        <div className="form-control-product">
                            <label htmlFor="name">Tên sản phẩm</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="form-add-product">
                        <div className="form-control-product">
                            <label htmlFor="price">Giá sản phẩm</label>
                            <input type="text" id='price'/>
                        </div>
                    </div>
                    <div className="form-add-product">
                        <div className="form-control-product">
                            <label htmlFor="categories">Thể loại</label>
                            <input type="text" id='categories'/>
                        </div>
                    </div>
                    <div className="form-add-product">
                        <div className="form-control-product">
                            <label htmlFor="image">Image</label>
                            <input type="file" id='image'/>
                        </div>
                    </div>
                    <div className="form-add-product">
                        <div className="form-control-product">
                            <label htmlFor="description">Mô tả: </label>
                            <textarea  id='description' d/>
                        </div>
                    </div> */}
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Giá sản phẩm</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <label htmlFor='categories'>Thể loại</label>
                        <Form.Select aria-label="Default select example" id='categories' defaultValue={'ĐIỆN THOẠI'}>
                            <option value="ĐIỆN THOẠI">ĐIỆN THOẠI</option>
                            <option value="LAPTOP">LAPTOP</option>
                            <option value="MÁY ẢNH">MÁY ẢNH</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Hình ảnh</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control as="textarea" defaultValue={''} rows={3} />
                    </Form.Group>
                    {/* <Form.Group className="mb-3 mx-auto"> */}
                    <Button variant="primary" onClick={addProduct}>Thêm sản phẩm</Button>
                    {/* </Form.Group> */}

                </div>

            </div>
        </>
    )
}

export default AddProduct