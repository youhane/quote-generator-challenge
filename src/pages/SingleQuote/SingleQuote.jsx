import React from 'react'
import Author from '../../components/Author/Author'
import Quote from '../../components/Quote/Quote'

export default function SingleQuote({quote, author, date}) {
  return (
    <>
        <Quote quote={quote}/>
        <Author author={author} date={date}/>
    </>
  )
}
