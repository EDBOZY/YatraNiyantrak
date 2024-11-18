import React from 'react'
import './Home.css'
import a from '../../images/all.png'
import b from '../../images/a2.png'


function Footer() {
  return (
    <div className="footer" style={{backgroundColor:"#F8F8F8"}}>
      <div className="up">
        <div className="part">
          <span>IRCTC Trains</span>
          <span>General Information</span>
          <span>Important Information</span>
          <span>Agents</span>
          <span>Enquiries</span>
        </div>
        <div className="part">
          <span>How To</span>
          <span>IRCTC Official App</span>
          <span>Advertise with us</span>
          <span>Refund Rules</span>
          <span>Person With Disability Facilities</span>
        </div>
        <div className="part">
          <span>IRCTC eWallet</span>
          <span>IRCTC Loyalty Program</span>
          <span>IRCTC-iPAY Payment Gateway</span>
          <span>IRCTC Zone</span>
          {/* <span>IRCTC Trains</span> */}
        </div>
        <div className="part">
          <span>For Newly Migrated Agents</span>
          <span>Mobile Zone</span>
          <span>Policies</span>
          <span>Ask Disha ChatBot</span>
          <span>About us</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="down">
        <div className="ld">
          <span>Partners</span>
          <img src={a} alt="" />
          <span>Copyright Â© 2023 - www.irctc.co.in. All Rights Reserved</span>
        </div>
        <div className="rd">
          <span>Connect with on social media</span>
          <img src={b} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer