import React from 'react'
import Author from '../../components/Author/Author'
import Quote from '../../components/Quote/Quote'

export default function SingleQuote({quote, author, tag, setShowMultipleQuotes}) {
  return (
    <>
        <Quote quote={quote}/>
        <Author author={author} tag={tag} setShowMultipleQuotes={setShowMultipleQuotes}/>
    </>
  )
}
