import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Display from './components/display/display'
import './App.css'
import Buttons from './components/buttons/buttons'
function App() {
  const[val,setval]=useState("");

  const handleonclick=(event)=>{
    console.log("clicked")
    console.log()
    
    let value=event.target.innerText
    if(value==="AC"){
      setval("")
    }
    else if(value=="="){
      let temp=eval(val);
      setval(temp);
    }
    else{
      setval(val.concat(event.target.innerText))
    }
    
  } 

  return (
    <>
      <div id="calculator">
       <Display value={val}></Display>
        <Buttons onClick={handleonclick}></Buttons>
        </div>  
    </>
  )
}

export default App
