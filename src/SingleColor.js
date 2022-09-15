import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor}) => {

  // console.log(hexColor)
  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(',') // every item will be joined and separated by commas
  // console.log(bcg);

  // for hex
  const hex = rgbToHex(...rgb);

  const hexValue = `#${hexColor}`;

  // for hiding the copy to clipboard after 3 sec
  useEffect(()=> {
    const timeout = setTimeout(()=> {
      setAlert(false)
    },3000)

    // clean the function every time we click
    return () => clearTimeout(timeout)
  },[alert])

  return (
    <article 
    className={`color ${index > 10 && 'color-light'}`} 
    style={{backgroundColor: `rgb(${bcg})`}}
    onClick={()=> {
      setAlert(true);
      // for copying to clipboard
      navigator.clipboard.writeText(hexValue) // passing the ehx value
    }}
    >

      {/* // for weight */}

      <p className='percent-value'>{weight}%</p>

      <p className='color-value'>#{hexValue}</p>

      {alert && <p className='alert'>Copied to the Clipboard</p>}
    </article>
  )
}

export default SingleColor
