import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'




function App() {

  // setting state values
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);

  const [list,setList] = useState(new Values('#0000ff').all(10)); // passing default as blue color

  const handleSubmit = (e) => {
    e.preventDefault();

    // for showing error when we want to generate a color that does not exist or empty value

    try {

        let colors = new Values(color).all(10); // all method - generate 10th and shades and we passed 10 it generates 10s divided 100% by 10

        setList(colors)
        console.log(colors)

    } catch (error) {
      setError(true)
      console.log(error)
    }

    // console.log(`test`)
  
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>

        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={color}
          placeholder='#0000FF'
          onChange={(e)=> setColor(e.target.value)}

          className={`${error ? 'error': null}`}
          />

          <button className='btn' type='submit'>Submit</button>
        </form>

      </section>

      <section className='colors'>

        {list.map((color,index)=>{
          // console.log(color);

       

          return <SingleColor key={index} {...color} 
          index={index}
          hexColor={color.hex}
          />
        })}

      </section>
    </>
  )
}

export default App
