import React, {useState} from 'react'
import './App.css';

function App() {
  const [Addinit,setAddinit]=useState(''); 
  const [Subinit,setSubinit]=useState(''); 
  const [Mulinit,setMulinit]=useState(''); 
  const [Divinit,setDivinit]=useState(''); 
  function Addition(){
    let x= parseInt(document.querySelector('#n1').value)
    let y= parseInt(document.querySelector('#n2').value)
    setAddinit(x+y)
  }
  function Subtraction(){
    let x= parseInt(document.querySelector('#n1').value)
    let y= parseInt(document.querySelector('#n2').value)
    setSubinit(x-y)
  }
  function Multiplication(){
    let x= parseInt(document.querySelector('#n1').value)
    let y= parseInt(document.querySelector('#n2').value)
    setMulinit(x*y)
  }
  function Division(){
    let x= parseInt(document.querySelector('#n1').value)
    let y= parseInt(document.querySelector('#n2').value)
    setDivinit(parseFloat(x/y).toFixed(2))
  }
  return(
    <div className="container">
    <div className="brand-logo"></div>
    <div className="brand-title">CALCULATOR</div>
    <input className="inputs"type="number" id="n1"/>
    <input className="inputs" type="number" id="n2"/><br/>
    <div className="button-grp">
    <button onClick={Addition}>+</button>
    <button onClick={Subtraction}>-</button>
    <button onClick={Multiplication}>*</button>
    <button onClick={Division}>/</button>
    </div>
    <p className="add">ADDITION: {Addinit}  </p>
    <p className="sub">SUBTRACTION: {Subinit}</p>
    <p className="mul">MULTIPLICATION: {Mulinit}  </p>
    <p className="div">DIVISION: {Divinit}</p>
    </div>
  )
}

export default App;
