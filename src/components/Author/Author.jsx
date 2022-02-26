import React, { useState } from 'react'
import { Wrapper } from './Author.styles'
import {FaLongArrowAltRight} from 'react-icons/fa'

export default function Author({author, date}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper 
      onMouseEnter={()=> {setHovered(true)}}
      onMouseLeave={()=>{setHovered(false)}}
    >
      <div>
        <h2 className={hovered ? 'white' : 'black'} >
          {author}
        </h2>
        <p>{date}</p>
      </div>
      <i><FaLongArrowAltRight/></i>
    </Wrapper>
  )
}