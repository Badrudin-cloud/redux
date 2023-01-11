import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/themeSlice';


function ChangeColor() {
    const dispatch = useDispatch();
    const [color, setColor] = useState('');

  return (
    <div>
        <input onChange={(e) => {
            setColor(e.target.value)
        }}/>
        <button onClick={() => {
            dispatch(changeColor(color))
        }}>Change color</button>
    </div>
  )
}

export default ChangeColor