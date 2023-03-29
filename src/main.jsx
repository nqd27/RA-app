import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './views/pages/SignUp/Signup'
import Login from './views/pages/Login/Login'
import ProFileUser from './views/pages/ProfileUser/ProFileUser'
import { CartProfileUser } from './views/pages/ProfileUser/CartProfileUser'
import LoginAdmin from './views/pages/Admin/LoginAdmin'
import MainAdmin from './views/pages/Admin/MainAdmin'
import Index from './views/pages/Index'
import { Navigate } from 'react-router-dom'
import MainHome from './views/pages/Home/MainHome'
import MainLayOut from './views/pages/Admin/Layout/MainLayOut'
import UserAdmin from './views/pages/Admin/UserAdmin'
import EditUserAdmin from './views/pages/Admin/EditUserAdmin'
import ProductAdmin from './views/pages/Admin/ProductAdmin'
import AddProduct from './views/pages/Admin/AddProduct'
// import '../src/assets/css/demo5.css'
// import './assets/css/plugins/bootstrap.css'
import Storage from './views/pages/storage/Storage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}>
          <Route index element={<Navigate to='/home' />} />
          <Route path='home' element={<MainHome />} />
          <Route path='signup' element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path='/profile'>
          <Route index element={<ProFileUser />} />
          <Route path='cart' element={<CartProfileUser />} />
        </Route>
        <Route path='/admin' element={<MainLayOut />}>
          <Route index element={<Navigate to='login' />} />
          <Route path='login' element={<LoginAdmin hide={true} />} />
          <Route path='main' element={<MainAdmin title={'WELLCOME TO ADMIN PAGES'} />} />
          <Route path='user' element={<UserAdmin title={'PROFILES USER'} />}/>
          <Route path='user/:userId' element={<EditUserAdmin title={'EDIT USER'}/>} />
          <Route path='product'>
              <Route index element={<Navigate to='main' />}/>
              <Route path='main' element={<ProductAdmin title={'EDIT PRODUCT'}/>} />
              <Route path='*' element={<ProductAdmin title={'EDIT PRODUCT'}/>} />
              <Route path='add' element={<AddProduct title={'ADD PRODUCT'}/>}/>
          </Route>
        </Route>
        <Route path='/store' element={<Storage/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
