import React from 'react'
import {FiRefreshCw} from 'react-icons/fi'
import { Wrapper } from './GetQuoteButton.styles'

export default function GetQuoteButton({getRandomQuote}) {
  return <Wrapper onClick={() => getRandomQuote()}>
    random <i><FiRefreshCw/></i>
  </Wrapper>
}