import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../../firebase/config'
import { getFirestore, doc, getDoc, collection, getDocs, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { Eggy } from '@s-r0/eggy-js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const EditUserAdmin = (props) => {
    let { userId } = useParams()
    // console.log(userId)
    const arrVaiTro = ['ADMIN', 'QTV'];
    const [dataU, setDataU] = useState([])
    const navigate = useNavigate();
    // const [checkUpdate, setCheckUpdate] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const refUser = doc(db, "Users", userId)
                const data = await getDoc(refUser)
                // console.log(data.data())
                const check = arrVaiTro.includes(data.data().vaitro);
                setDataU(data.data())
                if (typeof hide === "undefined") {
                    let navTop = document.querySelector('.nav-top');
                    let sideNav = document.querySelector('.side-nav');
                    let main = document.querySelector('.container-admin');
                    navTop.style.display = 'flex';
                    sideNav.style.display = 'flex';
                    main.style.display = 'flex';
                }
                const querySnapshot = await getDocs(collection(db, "Users",));
            }
        })
    }, [])

    // console.log(data)

    const updateProfileUser = async () => {
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let phone = document.querySelector('#phone').value;
        let address = document.querySelector('#address').value;
        let job = document.querySelector('#job').value;
        let avatar = document.querySelector('#avatar').value;
        let hoppy = document.querySelector('#hoppy').value;
        let vaitro = document.querySelector('#vaitro').value;

        if (!name || !email || !phone || !address || !job || !avatar || !hoppy) {
            await Eggy({
                title: '',
                message: 'Nhập đầy đủ thông tin đê bạn ơi!',
                type: 'error'
            });
        } else {
            if (confirm("Update chứ?")) {
                try {
                    await setDoc(doc(db, "Users", userId), {
                        name: name,
                        email: email,
                        address: address,
                        avatart: avatar,
                        hoppy: hoppy,
                        job: job,
                        phone: phone,
                        uid: userId,
                        vaitro: vaitro
                    })

                    Eggy({
                        title: '',
                        message: `Cập nhật thông tin thành công!`,
                        type: 'success',
                        duration: 2000
                    });
                    // setCheckUpdate(!checkUpdate)
                    navigate('../user')

                } catch (error) {
                    Eggy({
                        title: '',
                        message: `${error}`,
                        type: 'error',
                        duration: 2000
                    });

                }
            }
        }
    }

    const cancelProfileUser = () => {
        navigate('../user')
    }

    return (
        <>
            <div className="titles">
                <h1>{props.title}</h1>
            </div>

            <div className="render-data" >
                <div className="wrapper-edit-user">
                    <div className="left-box">
                        <img src={dataU.avatart} alt="" />
                        <div className="change-ava">
                            <label htmlFor="avatar">Link avatar</label>
                            <input type="text" id='avatar' defaultValue={dataU.avatart} />
                        </div>
                    </div>

                    <div className="right-box">

                        <div className="message-user">
                            <div className="form-control-user">
                                <label htmlFor="name">Name</label>
                                <input type="text" id='name' defaultValue={dataU.name} />
                            </div>
                            <div className="form-control-user">
                                <label htmlFor="email">Email</label>
                                <input type="text" id='email' defaultValue={dataU.email} />
                            </div>
                            <div className="form-control-user">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id='phone' defaultValue={dataU.phone} />
                            </div>
                            <div className="form-control-user">
                                <label htmlFor="address">Address</label>
                                <input type="text" id='address' defaultValue={dataU.address} />
                            </div>
                            <div className="form-control-user">
                                <label htmlFor="job">Job</label>
                                <input type="text" id='job' defaultValue={dataU.job} />
                            </div>
                            <div className="form-control-user">
                                <label htmlFor="hoppy">Hoppy</label>
                                <input type="text" id='hoppy' defaultValue={dataU.hoppy} />
                                <input type="hidden" id='vaitro' defaultValue={dataU.vaitro} />
                            </div>
                            <div className="form-control-user">
                                <Button variant="contained" onClick={updateProfileUser}>
                                    Update
                                </Button>
                                <Button variant="outlined" onClick={cancelProfileUser}>
                                    Cancel
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUserAdmin