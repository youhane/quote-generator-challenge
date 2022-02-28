import React from 'react'
import SingleQuote from '../SingleQuote/SingleQuote'

export default function MultipleQuotes({multipleQuotes}) {
  return (
    <>
      {multipleQuotes?.map((quote, index) => {
        return <SingleQuote key={index} quote={quote.content} author={quote.author} tag={quote.tags[0]}/>
      })}
    </>
  )
}
