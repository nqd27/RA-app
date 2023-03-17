import React from 'react'
import { Link } from 'react-router-dom'

function SideNave(props) {
    const {data} = props


    const style = {
        name: {
            fontWeight: '600'
        }
    }

    return (
        <div className="sidenav">
            {
                data?<div className="profile">
                <img src="https://genk.mediacdn.vn/k:2016/6-1474109930503/15tamanhgifphananhhoanhaocamgiaccuafanhammoanime.gif" alt="" />

                <div className="name">
                    <h2 style={style.name}>{data?data.name:""}</h2>
                </div>
                <div className="job">
                    <h4>{data?data.job:""}</h4>
                </div>
            </div>:""
            }
            

            <div className="sidenav-url">
                <div className="url">
                    <Link to='/profile' state={"Thông tin người dùng"}>Thông tin</Link>
                    <hr align="center" />
                </div>
                
                <div className="url">
                    <Link to='cart' state={"Đơn hàng của bạn"}>Đơn hàng</Link>
                    <hr align="center"/>
                </div>
            </div>
        </div>
    )
}

export default SideNave