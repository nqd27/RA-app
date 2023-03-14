import React from 'react'

function SideNave() {
    return (
        <div className="sidenav">
            <div className="profile">
                <img src="https://genk.mediacdn.vn/k:2016/6-1474109930503/15tamanhgifphananhhoanhaocamgiaccuafanhammoanime.gif" alt="" />

                <div className="name">
                    OhMyGoddd
                </div>
                <div className="job">
                    Web Developer
                </div>
            </div>

            <div className="sidenav-url">
                <div className="url">
                    <a href="#profile" className="active">Profile</a>
                    <hr align="center" />
                </div>
                <div className="url">
                    <a href="#settings">Settings</a>
                    <hr align="center" />
                </div>
            </div>
        </div>
    )
}

export default SideNave