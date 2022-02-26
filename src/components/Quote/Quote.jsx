import React from 'react'
import { Wrapper } from './Quote.styles'

export default function Quote({quote}) {
  return (
    <Wrapper>
      <div></div>
      <h1>{quote}</h1>
    </Wrapper>
  )
}