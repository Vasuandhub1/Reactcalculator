import React, { useState } from 'react'
import "./dispay.css"

export default function Display({value}) {
  
  return (
    <div>
       <input type="text" id='text-box' value={value} disabled  style={{fontSize:"30px"}}/>
    </div>
  )
}
