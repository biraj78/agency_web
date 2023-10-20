import React from 'react'
import "../style/banner.css"
import bell from "../images/bell.png"
const midBanner = () => {
  return (
    <>
    <div className="banner_container">

    <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="194" height="231" viewBox="0 0 194 231" fill="none">
<path d="M192.94 40.7771C174.257 76.8903 85.5214 113.276 76.6324 67.5246C71.2719 39.9345 83.0788 13.2302 108.259 2.87594C147.781 -13.3759 157.222 95.9323 114.416 141.378C71.6098 186.824 2.41181 200.542 0.508608 230.494" stroke="white" stroke-opacity="0.5" stroke-dasharray="7 7"/>
</svg>

<svg className='svg3' xmlns="http://www.w3.org/2000/svg" width="271" height="107" viewBox="0 0 271 107" fill="none">
<path d="M0.592145 8.39339C40.1599 -1.54783 125.622 43.3056 96.7292 81.4542C79.3057 104.46 51.3573 113.388 27.0839 100.68C-11.0152 80.7333 65.7083 -1.15189 128.085 1.48067C190.461 4.11323 245.993 49.077 269.945 30.1632" stroke="white" stroke-opacity="0.5" stroke-dasharray="7 7"/>
</svg>
<img src={bell} alt="" />
<div>
<h3>Book an appointment! <a href="#c">BOOK NOW.</a> </h3>
</div>
<svg className='svg2' xmlns="http://www.w3.org/2000/svg" width="247" height="155" viewBox="0 0 247 155" fill="none">
  <path d="M221.473 153.717C182.473 142.217 129.928 61.9869 173.165 44.5871C199.238 34.0941 227.697 40.6253 242.636 63.3863C266.084 99.1116 160.547 129.1 107.812 95.684C55.0762 62.2681 28.4907 -3.07519 -1.27926 0.733419" stroke="white" stroke-opacity="0.5" stroke-dasharray="7 7"/>
</svg>
    </div>
    </>
  )
}

export default midBanner