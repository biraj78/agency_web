import React from 'react'
import "../style/whatWeDo.css"
import smm from "../images/smm.png"
import web from "../images/web.png"
import mobo from "../images/mobo.png"
import sem from "../images/sem.png"
import ai2 from "../images/ai2.png"
import ma from "../images/marketing-automation.png"
const whatWeDo = () => {
  return (
    <>
  <div className="weDo_container" id='services'>

    <div className="weDo_title">
      <h2>What we do</h2>
    </div>

    <div className="weDo_services">

<div className="s1 services_weDo">
<div className="imgBack img1">
  <img src={web} alt="" />
  </div>
<h4>Web Application</h4>
<p>Platform independant business solutions for maximum availability</p>
</div>

<div className="s2 services_weDo">
<div className="imgBack img2">
  <img src={sem} alt="" />
  </div>
<h4>Search Engine Marketing</h4>
<p>Let the world find you on top of others
</p>
</div>

<div className="s3 services_weDo">
<div className="imgBack img3">
  <img src={mobo} alt="" />
  </div>
<h4>Mobile Applications</h4>
<p>The simplest but robust technology to accompany with you</p>
</div>

<div className="s4 services_weDo">
<div className="imgBack img4">
  <img src={smm} alt="" />
  </div>
  <h4>Social Media Marketing</h4>
  <p>Business made easy in a digital world</p>
</div>

<div className="s5 services_weDo">
<div className="imgBack img5">
  <img src={ai2} alt="" />
  </div>
<h4>Ai Automation</h4>
<p>Get your decision making backed by inteligent insight</p>
</div>
<div className="s6 services_weDo">
  <div className="imgBack img6">
  <img src={ma} alt="" />
  </div>
<h4>Marketing Automation</h4>
<p>Get your decision making backed by inteligent insight</p>
</div>
    </div>
  </div>
    </>
  )
}

export default whatWeDo