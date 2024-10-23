import React from 'react'
import {useState} from 'react'

function Background() {
    const [color, setColor]= useState("white")
    
  return (
    <>
    <div>
    
      <button onClick={()=>setColor ("red") } >Red</button>
      <button onClick={()=>setColor ("green") } >Green</button>
      <button onClick={()=>setColor ("blue") } >Blue</button>
      <button onClick={()=>setColor ("purple") } >Purple</button>
      <button onClick={()=>setColor ("yellow") } >Yellow</button>
      <button onClick={()=>setColor ("pink")}  >Pink</button>
      <button onClick={()=>setColor ("orange") } >Orange</button>
      <button onClick={()=>setColor ("white") } >White</button>
      
    </div>
    <div
      style={{
        marginTop: '20px',
        backgroundColor: color,
        border: '1px solid black',
      }}
    >
      <h3>The background color is {color}</h3>
      <h3>Hello world</h3>
    </div>
    </>
  )
}

export default Background