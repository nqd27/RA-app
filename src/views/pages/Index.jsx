import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainHome from './Home/MainHome'
import { Outlet } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <Header />
                <Outlet/>
            <Footer />
        </>
    )
}

export default Index