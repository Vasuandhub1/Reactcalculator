import React,{useState} from 'react'
import Display from '../display/display';
import "./buttons.css"


export default function Buttons({onClick}) {
    let buttons=["1","2","3","4","5","6","7","8","9","0","+","-","*","%","/","=","AC"];
  return (
    <div>
      <div id="button-container">
          {buttons.map((value,index)=>{
            return (
              <button key={index} id="button" onClick={onClick} ><p style={{fontSize:"1.8rem"}}>{value}</p></button>
            )
          })}
        </div>
    </div>
  )
}
