import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    
      <div>
        <h1 style={{color:"white"}}>Responsive Grid System</h1>
        <div className='maindiv'>
       <div>
        <div className='div1' style={{backgroundColor:"#f8f7fcff"}}>
          <div className='minidiv'>
          <h2>Mobile First</h2>
          <div className='minidiv2'>
          <p className="k1">1</p>
          </div>
          </div>
          <p style={{fontSize:"20px"}} className='ps'>Starts with 1 column on mobile,<br></br>expands to 2, 3, then 4 columns<br></br> as screen size increases.</p>
        </div>
       </div>

       <div className='div2' style={{backgroundColor:"#f8f7fcff"}}>
          <div className='minidiv'>
          <h2>Tablet View</h2>
          <div className='minidiv2'>
          <p className="k1">2</p>
          </div>
          </div>
          <p style={{fontSize:"20px"}} className='ps'>Perfect grid layout for<br></br>tablets with 2-3 columns<br></br>depending on orientation.</p>
        </div>


        <div className='div3' style={{backgroundColor:"#f8f7fcff"}}>
          <div className='minidiv'>
          <h2>Desktop Ready</h2>
          <div className='minidiv2'>
          <p className="k1">3</p>
          </div>
          </div>
          <p style={{fontSize:"20px"}} className='ps'>Full 4-column layout on <br></br>larger screens with optimal <br></br>spacing and readability.</p>
        </div>




          <div className='div4' style={{backgroundColor:"#f8f7fcff"}}>
          <div className='minidiv'>
          <h2>Smooth Transitions</h2>
          <div className='minidiv2'>
          <p className="k1">4</p>
          </div>
          </div>
          <p style={{fontSize:"20px"}} className='ps'>All layout changes happen<br></br>smoothly with CSS<br></br>transitions and hover<br></br>effects.

</p>
        </div>




         <div className='div5' style={{backgroundColor:"#f8f7fcff"}}>
          <div className='minidiv'>
          <h2>Accessible</h2>
          <div className='minidiv2'>
          <p className="k1">5</p>
          </div>
          </div>
          <p style={{fontSize:"20px"}} className='ps'>Built with semantic HTML<br></br>and proper contrast ratios<br></br>for excellent accessibility.</p>
        </div>



        <div className='div6' style={{backgroundColor:"#f8f7fcff"}}>
          <div className='minidiv'>
          <h2>Performance</h2>
          <div className='minidiv2'>
          <p className="k1">6</p>
          </div>
          </div>
          <p style={{fontSize:"20px"}} className='ps'>Lightweight CSS-only<br></br>solution with hardware-<br></br>accelerated animations.</p>
        </div>
        </div>
       </div>
       
    
  )
}

export default App
