import React, { useState } from 'react'
import { Wrapper } from './Author.styles'
import {FaLongArrowAltRight} from 'react-icons/fa'

export default function Author({author, tag, setShowMultipleQuotes}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper 
      onMouseEnter={()=> {setHovered(true)}}
      onMouseLeave={()=>{setHovered(false)}}
      onClick={()=>{setShowMultipleQuotes(true)}}
    >
      <div>
        <h2 className={hovered ? 'white' : 'black'} >
          {author}
        </h2>
        <p>{tag}</p>
      </div>
      <i><FaLongArrowAltRight/></i>
    </Wrapper>
  )
}