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
import EditProduct from './views/pages/Admin/EditProduct'
import ProductDetail from './views/pages/ProductDetail/ProductDetail'
import CheckOut from './views/pages/CheckOut/CheckOut'
// import '../src/assets/css/demo5.css'
// import './assets/css/plugins/bootstrap.css'
import Storage from './views/pages/storage/Storage'
import { Provider } from 'react-redux'
import store from './views/store/store'
import CartDetailUser from './views/pages/ProfileUser/CartDetailUser'
import CartAdmin from './views/pages/Admin/Carts/CartAdmin'
import CartDetailAdmin from './views/pages/Admin/Carts/CartDetailAdmin'
import Statistical from './views/pages/Admin/Statistical/Statistical'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Index />}>
          <Route index element={<Navigate to='/home' />} />
          <Route path='home' element={<MainHome />} />
          <Route path='signup' element={<Signup />} />
          <Route path="login" element={<Login />} />
          {/* Product */}
          <Route path='product/:id' element={<ProductDetail/>}/>
          <Route path='checkout' element={<CheckOut/>} />
        </Route>
        <Route path='/profile'>
          <Route index element={<ProFileUser />} />
          <Route path='cart' element={<CartProfileUser />} />
          <Route path='cart/:uid' element={<CartDetailUser/>} />
        </Route>
        <Route path='/admin' element={<MainLayOut />}>
          <Route index element={<Navigate to='login' />} />
          <Route path='login' element={<LoginAdmin hide={true} />} />
          <Route path='main' element={<MainAdmin title={'WELLCOME TO ADMIN PAGES'} />} />
          <Route path='user' element={<UserAdmin title={'PROFILES USER'} />} />
          <Route path='user/:userId' element={<EditUserAdmin title={'EDIT USER'} />} />
          <Route path='cart'>
              <Route index element={<Navigate to='main'/>}/>
              <Route path='main' element={<CartAdmin title={'QUẢN LÝ ĐƠN HÀNG'} />}/>
              <Route path='uid/:id/:idU' element={<CartDetailAdmin title={'ĐƠN HÀNG'}/>}  />
          </Route>
          <Route path='statis'>
              <Route index element={<Navigate to='main'/>}/>
              <Route path='main' element={<Statistical title={'TRANG THỐNG KÊ'} />}/>
          </Route>
          <Route path='product'>
            <Route index element={<Navigate to='main' />} />
            <Route path='main' element={<ProductAdmin title={'PRODUCT OF SHOP'} />} />
            <Route path='*' element={<ProductAdmin title={'PRODUCT OF SHOP'} />} />
            <Route path='add' element={<AddProduct title={'ADD PRODUCT'} />} />
            <Route path='edit/:uid' element={<EditProduct title={'EDIT PRODUCT'} />} />
          </Route>
        </Route>


        <Route path='/store' element={<Storage />}>

        </Route>
      </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
