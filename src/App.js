import Author from './components/Author/Author';
import Footer from './components/Footer/Footer';
import GetQuoteButton from './components/GetQuoteButton/GetQuoteButton';
import Quote from './components/Quote/Quote';
import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <div>
      <GetQuoteButton/>
      <Quote/>
      <Author/>
      <Footer/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
