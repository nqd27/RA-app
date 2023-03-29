import React, { useState } from 'react'
import { Button } from '@mui/material'
import { firebaseConfig } from '../../../firebase/config'
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const UserAdmin = (props) => {
  const arrVaiTro = ['ADMIN', 'QTV'];
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const [vaitro, setVaitro] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const refUser = doc(db, "Users", user.uid)
        const data = await getDoc(refUser)
        const check = arrVaiTro.includes(data.data().vaitro);
        // console.log(check)
        
        if (!check) {
          navigate('..')
        }else{
          setVaitro(data.data().vaitro)
          console.log(data.data().vaitro)
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
                  <th>ID</th>
                  <th>Name</th>
                  <th>Avatar</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Job</th>
                  <th>Role</th>
                  <th colSpan='2'></th>
                </tr></thead>
                <tbody>
                  {
                    data.map((item, index) => {
                      // console.log(item.data())
                      if (item.data().vaitro != 'ADMIN') {
                        return (
                          <tr key={index}>
                            <td style={{ overflow: 'hidden'}}><span>{item.data().uid}</span></td>
                            <td><span className="name">{item.data().name}</span>
                            </td>
                            <td className='avatar'><img src={item.data().avatart} alt="" /></td>
                            <td>{item.data().email}</td>
                            <td>{item.data().phone}</td>
                            <td><span className="label label-success">{item.data().address}</span></td>
                            <td>{item.data().job}</td>
                            <td>{item.data().vaitro}</td>
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