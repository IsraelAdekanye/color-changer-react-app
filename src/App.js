import React from 'react';
import {useState} from 'react';
import './App.css';

const App=()=>{
  let [color, setColor] = useState('')

  const style = {
    backgroundColor: color,
    height: "100vh"
  }

  
  return (
    <div style={style} className="App">
      <div className="container">
        <label>Enter Color:</label>
        <input type = "text" className='inputText' name='textInput' onChange={event=>setColor(event.target.value)}></input>
        {/* <button type='submit' onClick={(e)=>setColorChanger(e)}>Submit</button> */}
      </div>
    </div>
  )
}

export default App;

