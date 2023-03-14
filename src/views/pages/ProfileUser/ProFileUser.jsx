import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import NavTop from './NavTop'
import SideNave from './SideNave'

function ProFileUser() {


  return (
    <>
      <div>
        <NavTop/>
        <SideNave/>
        <div className="main">
          <h2>DANH THIẾP</h2>
          <div className="card">
            <div className="card-body">
              <i className="fa fa-pen fa-xs edit"></i>
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>:</td>
                    <td>ImDezCode</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>imdezcode@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>:</td>
                    <td>Bali, Indonesia</td>
                  </tr>
                  <tr>
                    <td>Hobbies</td>
                    <td>:</td>
                    <td>Diving, Reading Book</td>
                  </tr>
                  <tr>
                    <td>Job</td>
                    <td>:</td>
                    <td>Web Developer</td>
                  </tr>
                  <tr>
                    <td>Skill</td>
                    <td>:</td>
                    <td>PHP, HTML, CSS, Java</td>
                  </tr>
                </tbody>
              </table>
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

      </div>
    </>
  )
}

export default ProFileUser