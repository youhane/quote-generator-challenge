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
    tags: '',
  });
  const [multipleQuotes, setMultipleQuotes] = useState();
  const [showMultipleQuotes, setShowMultipleQuotes] = useState(false);

  // GET RANDOM QUOTE
  const getRandomQuote = () => {
    fetch(API + '/random')
    .then(res => res.json())
    .then(data => setQuotes(data))
  }

  // GET MANY QUOTES
  const getManyQuotes = () => {
    fetch(API + '/quotes')
    .then(res => res.json())
    .then(data => setMultipleQuotes(data.results))
  }

  useEffect(() => {
    getRandomQuote()
    getManyQuotes()
  }, []);

  return (
    < >
      <GetQuoteButton getRandomQuote={getRandomQuote}/>
      {showMultipleQuotes ? 
        (<MultipleQuotes multipleQuotes={multipleQuotes}/>) : 
        (<SingleQuote 
          quote={quotes.content} 
          author={quotes.author} 
          tag={quotes.tags[0]} 
          setShowMultipleQuotes={setShowMultipleQuotes}
          />
        )
      }
      <Footer/>
      <GlobalStyles/>
    </>
  );
}

export default App;
