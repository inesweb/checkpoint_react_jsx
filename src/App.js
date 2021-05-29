
import React from 'react'
import imgSrc from './imgSrc.png';
//import './App.css';
import './Style.css';


function App() {
  return (
    < div className="App">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">INES ZEKRI</h1>
      <br />
          
          <img src={imgSrc} className="App-logo" alt="logo1" />
          <br /> <br /> <br /> 
          <img src="/imgPublic.png" className="App-img"alt="image"/>
         

    <br />    <br />    <br />    <br />
    <video width={850} height={250} controls>
      <source src="myVideo.mp4" type="video/mp4"  />
    </video>
  </div>
  </div>
);
}


export default App;
