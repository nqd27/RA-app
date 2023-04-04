import React, { useEffect, useState } from 'react'
import { Eggy } from '@s-r0/eggy-js';
import { firebaseConfig } from '../../../firebase/config';
import { getFirestore, collection, doc, setDoc, getDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app'
import { useSelector, useDispatch } from 'react-redux';
import accountSlice from '../../store/sclice/accountSlice';
import { getProfile } from '../../store/selectors/accountSelector';

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

function MainProfile(props) {
    const dispatch = useDispatch()
    const { data, uid, checkEdit } = props
    // console.log(checkEdit)
    const [checkUpdate, setCheckUpdate] = useState(false);
    const dataA = useSelector(getProfile)

    // console.log(dataA)
    // console.log(data)
    // console.log(uid)

    // useEffect( () => {
    //     const ref = doc(db,'users',uid);
    //     const docSnap =  getDoc(ref)
    //     setOldData(docSnap)
    // },[])


    const updateProfile = async () => {
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let address = document.querySelector("#address").value;
        let hoppy = document.querySelector("#hoppy").value;
        let job = document.querySelector("#job").value;
        let phone = document.querySelector("#phone").value;

        if (!name || !email || !address || !hoppy || !job || !phone) {
            Eggy({
                title: 'Error',
                message: `Bạn chưa nhập đủ thông tin!`,
                type: 'error',
                duration: 2000
            });
        } else {
            if(confirm("Update profile??")){
                let dataUpdate = {
                    uid: uid,
                    name: name,
                    email: email,
                    address: address,
                    hoppy: hoppy,
                    job: job,
                    phone: phone,
                    vaitro: data.vaitro
                }

                let dtud = {
                    address: address,
                    hoppy: hoppy,
                    job: job,
                    miniCart: dataA.miniCart,
                    cart: dataA.cart,
                    uid: dataA.uid,
                    email: email,
                    name: name,
                    phone: phone,
                    password: dataA.ps,
                    status: true,
                    vaitro: dataA.vaitro,
                    ps: dataA.ps,
                    avatart: dataA.avatart
                  }
                  
                  console.log(dtud)
                try {
                    dispatch(accountSlice.actions.getProfile(dtud))
                    await setDoc(doc(db, "Users", uid), dtud);
                    Eggy({
                        title: 'Success',
                        message: `Cập nhật thông tin thành công!`,
                        type: 'success',
                        duration: 2000
                    });
    
                    const editElement = document.querySelector('#editProflie');
                    editElement.style.marginTop = "0px"
    
                    checkEdit(true)
    
                } catch (error) {
                    console.log(error)
                }
            }            
        }
    }

    const editProfile = () => {
        const editElement = document.querySelector('#editProflie');
        editElement.style.marginTop = "-350px"
        checkEdit(false)
    }

    const canCel = () => {
        const editElement = document.querySelector('#editProflie');
        editElement.style.marginTop = "0px"
    }

    return (
        <>
            <div className="main" id='MainProfile'>
                <h2>DANH THIẾP</h2>
                <div className="card" style={{
                    height: '380px',
                    overflow: 'hidden',
                }}>
                    <div className="card-body" id='editProflie'>
                        <i className="fa fa-pen fa-xs edit"></i>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Họ và tên: </td>
                                    <td>:</td>
                                    <td id='valueD'>{dataA.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td id='valueD'>{dataA.email}</td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ</td>
                                    <td>:</td>
                                    <td id='valueD'>{dataA.address}</td>
                                </tr>
                                <tr>
                                    <td>Sở thích</td>
                                    <td>:</td>
                                    <td id='valueD'>{dataA.hoppy}</td>
                                </tr>
                                <tr>
                                    <td>Nghề nghiệp</td>
                                    <td>:</td>
                                    <td id='valueD'>{dataA.job}</td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>:</td>
                                    <td id='valueD'>{dataA.phone}</td>
                                </tr>
                            </tbody>

                        </table>
                        <button className='btn btn-primary' style={{
                            borderRadius: '5px',
                            // height: '30px',
                            textAlign: 'center'
                        }} onClick={editProfile}>Edit</button>
                    </div>
                    <div className="card-body" id='updateProfile'>
                        <i className="fa fa-pen fa-xs edit"></i>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Họ và tên: </td>
                                    <td>:</td>
                                    <td><input type="text" id='name' defaultValue={dataA.name} /></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td><input type="text" id='email' defaultValue={dataA.email} /></td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ</td>
                                    <td>:</td>
                                    <td><input type="text" id='address' defaultValue={dataA.address} /></td>
                                </tr>
                                <tr>
                                    <td>Sở thích</td>
                                    <td>:</td>
                                    <td><input type="text" id='hoppy' defaultValue={dataA.hoppy} /></td>
                                </tr>
                                <tr>
                                    <td>Nghề nghiệp</td>
                                    <td>:</td>
                                    <td><input type="text" id='job' defaultValue={dataA.job} /></td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>:</td>
                                    <td><input type="text" id='phone' defaultValue={dataA.phone} /></td>
                                </tr>
                            </tbody>

                        </table>
                        <button className='btn btn-primary' style={{
                            borderRadius: '5px',
                            // height: '30px',
                            textAlign: 'center'
                        }} onClick={updateProfile}>Update</button>
                        <button className='btn btn-white' id='btn-cancel' style={{
                            borderRadius: '5px',
                            // height: '30px',
                            marginLeft: "10px",
                            textAlign: 'center'
                        }} onClick={canCel}>Cancel</button>
                    </div>
                </div>
                <h2>SOCIAL MEDIA</h2>
                <div className="card">
                    <div className="card-body">
                        <i className="fa fa-pen fa-xs edit"></i>
                        <div className="social-media">
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-invision fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-snapchat fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainProfile