import React from 'react'
import Quote from '../../components/Quote/Quote'
import { Wrapper } from './MultipleQuotes.styles'

export default function MultipleQuotes() {
  return (
    <Wrapper>
      <h2>Author Name</h2>
      <Quote/>
      <Quote/>
      <Quote/>
      <Quote/>
    </Wrapper>
  )
}
