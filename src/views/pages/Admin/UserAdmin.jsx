import React, { useState } from 'react'
import { Button } from '@mui/material'
import { firebaseConfig } from '../../../firebase/config'
import { getFirestore, doc, getDoc, collection, getDocs, updateDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { getProfile } from '../../store/selectors/accountSelector'
import { useSelector, useDispatch } from 'react-redux'
import { getListUser } from '../../store/selectors/adminSelector'
import adminSlice from '../../store/sclice/adminSlice'
import { Eggy } from '@s-r0/eggy-js'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const UserAdmin = (props) => {
  const arrVaiTro = ['ADMIN', 'QTV'];
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const [vaitro, setVaitro] = useState()
  const dispatch = useDispatch()
  const users = useSelector(getListUser)
  // console.log(users)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const refUser = doc(db, "Users", user.uid)
        const data = await getDoc(refUser)
        const check = arrVaiTro.includes(data.data().vaitro);
        // console.log(check)

        if (!check) {
          navigate('..')
        } else {
          setVaitro(data.data().vaitro)
          // console.log(data.data().vaitro)
        }

        if (typeof hide === "undefined") {
          let navTop = document.querySelector('.nav-top');
          let sideNav = document.querySelector('.side-nav');
          let main = document.querySelector('.container-admin');
          navTop.style.display = 'flex';
          sideNav.style.display = 'flex';
          main.style.display = 'flex';
        }

        const querySnapshot = await getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
        });
        // console.log(querySnapshot.docs)
        setData(querySnapshot.docs)
      }
    })
  }, [])

  const changeRole = async (e) => {
    let uid = e.target.parentNode.parentNode.childNodes[1].innerText
    let idR = e.target.parentNode.parentNode.childNodes[0].innerText
    let value = e.target.value
    // console.log(idR)

    let refU = doc(db, "Users", uid)

    await updateDoc(refU, {
      vaitro: value
    })

    let arr = []
    users.forEach(item => {
      // console.log(item)
      if (item.uid == uid) {
        let a = {
          job: item.job,
          avatart: item.avatart,
          vaitro: value,
          ps: item.ps,
          email: item.email,
          phone: item.phone,
          hoppy: item.hoppy,
          miniCart: item.miniCart,
          name: item.name,
          status: item.status,
          address: item.address,
          uid: item.uid
        }

        console.log(a)
        dispatch(adminSlice.actions.setRoleUser({ a, idR }))
      }
    })

    await Eggy({
      title: 'Update Role',
      message: `Update thành công!!`,
      type: 'success',
      duration: 1000
    })

  }

  // console.log(data)

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
                <thead><tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Avatar</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Job</th>
                  <th colSpan='2'>Role</th>
                  <th colSpan='2'></th>
                </tr></thead>
                <tbody>
                  {
                    data.map((item, index) => {
                      // console.log(item.data())
                      if (item.data().vaitro != 'ADMIN') {
                        return (
                          <tr key={index}>
                            <td>{index}</td>
                            <td style={{ overflow: 'hidden' }}><span>{item.data().uid}</span></td>
                            <td><span className="name">{item.data().name}</span>
                            </td>
                            <td className='avatar'><img src={item.data().avatart} alt="" /></td>
                            <td>{item.data().email}</td>
                            <td>{item.data().phone}</td>
                            <td><span className="label label-success">{item.data().address}</span></td>
                            <td>{item.data().job}</td>
                            <td>
                              {vaitro == "ADMIN" ?
                                <Form.Select defaultValue={item.data().vaitro} onChange={changeRole}>
                                  <option value="KHÁCH HÀNG">KHÁCH HÀNG</option>
                                  <option value="QTV">QTV</option>
                                </Form.Select>
                                :
                                <Form.Select disabled defaultValue={item.data().vaitro} onChange={changeRole}>
                                  <option value="KHÁCH HÀNG">KHÁCH HÀNG</option>
                                  <option value="QTV">QTV</option>
                                </Form.Select>
                              }
                            </td>

                            <td style={{
                              display: vaitro != "ADMIN" ? "none" : "block",
                            }}><Link to={item.data().uid}>
                                <Button variant="contained" color='primary'>
                                  Edit
                                </Button>
                              </Link></td>
                            <td style={{
                              display: vaitro != "ADMIN" ? "none" : "block",
                            }}>
                              <Link>
                                <Button variant="outlined" color='error'>
                                  Del
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        )
                      }
                    })
                  }
                </tbody>

              </table>
            </div>
          </md-content>
        </div>
      </div >

    </>
  )
}

export default UserAdmin