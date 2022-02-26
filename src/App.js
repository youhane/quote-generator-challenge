import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import GetQuoteButton from './components/GetQuoteButton/GetQuoteButton';
import { GlobalStyles } from './GlobalStyles';
import MultipleQuotes from './pages/MultipleQuotes/MultipleQuotes';
import SingleQuote from './pages/SingleQuote/SingleQuote';

const API = 'https://api.quotable.io'

function App() {
  const [quotes, setQuotes] = useState({
    content: '',
    author: '',
    date: '',
  });

  // GET RANDOM QUOTE
  const getRandomQuote = () => {
    fetch(API + '/random')
    .then(res => res.json())
    .then(data => setQuotes(data))
  }

  useEffect(() => {
    getRandomQuote()
  }, []);

  return (
    <>
      <GetQuoteButton getRandomQuote={getRandomQuote}/>
      <SingleQuote quote={quotes.content} author={quotes.author} date={quotes.dateAdded}/>
      {/* <MultipleQuotes/> */}
      <Footer/>
      <GlobalStyles/>
    </>
  );
}

export default App;
