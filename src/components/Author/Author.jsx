import React from 'react'
import { Wrapper } from './Author.styles'
import {FaLongArrowAltRight} from 'react-icons/fa'

export default function Author() {
  return (
    <Wrapper>
      <div>
        <h2>Author Name</h2>
        <p>Genre</p>
      </div>
      <i><FaLongArrowAltRight/></i>
    </Wrapper>
  )
}