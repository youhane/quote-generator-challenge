import Footer from './components/Footer/Footer';
import GetQuoteButton from './components/GetQuoteButton/GetQuoteButton';
import { GlobalStyles } from './GlobalStyles';
import MultipleQuotes from './pages/MultipleQuotes/MultipleQuotes';
import SingleQuote from './pages/SingleQuote/SingleQuote';

function App() {
  return (
    <>
      <GetQuoteButton/>
      <SingleQuote/>
      <MultipleQuotes/>
      <Footer/>
      <GlobalStyles/>
    </>
  );
}

export default App;
